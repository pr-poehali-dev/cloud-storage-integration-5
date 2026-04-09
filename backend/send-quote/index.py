import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет заявку с формы на email e.romanov138@gmail.com"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')

    name = body.get('name', '')
    email = body.get('email', '')
    phone = body.get('phone', '')
    company = body.get('company', '')
    package = body.get('package', '')
    message = body.get('message', '')

    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    sender_email = 'e.romanov138@gmail.com'
    receiver_email = 'e.romanov138@gmail.com'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта: {name}'
    msg['From'] = sender_email
    msg['To'] = receiver_email

    html = f"""
    <html>
    <body style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #e94560; padding-bottom: 10px;">
            Новая заявка с сайта OutreachPro
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 8px; font-weight: bold; width: 30%;">Имя:</td>
                <td style="padding: 8px;">{name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold;">Email:</td>
                <td style="padding: 8px;">{email}</td>
            </tr>
            <tr>
                <td style="padding: 8px; font-weight: bold;">Телефон:</td>
                <td style="padding: 8px;">{phone}</td>
            </tr>
            <tr style="background: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold;">Компания:</td>
                <td style="padding: 8px;">{company or '—'}</td>
            </tr>
            <tr>
                <td style="padding: 8px; font-weight: bold;">Тариф:</td>
                <td style="padding: 8px;">{package or '—'}</td>
            </tr>
            <tr style="background: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold; vertical-align: top;">Сообщение:</td>
                <td style="padding: 8px;">{message or '—'}</td>
            </tr>
        </table>
    </body>
    </html>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(sender_email, smtp_password)
        server.sendmail(sender_email, receiver_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'message': 'Заявка отправлена'})
    }
