import json
import os
import urllib.request


def handler(event: dict, context) -> dict:
    """Отправляет заявку с формы в Telegram-бот владельца сайта"""

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

    bot_token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = os.environ['TELEGRAM_CHAT_ID']

    text = (
        f"🔔 *Новая заявка с сайта OutreachPro*\n\n"
        f"👤 *Имя:* {name}\n"
        f"📧 *Email:* {email}\n"
        f"📱 *Телефон:* {phone}\n"
        f"🏢 *Компания:* {company or '—'}\n"
        f"📦 *Тариф:* {package or '—'}\n"
        f"💬 *Сообщение:* {message or '—'}"
    )

    payload = json.dumps({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'Markdown'
    }).encode('utf-8')

    req = urllib.request.Request(
        f'https://api.telegram.org/bot{bot_token}/sendMessage',
        data=payload,
        headers={'Content-Type': 'application/json'}
    )
    urllib.request.urlopen(req)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'message': 'Заявка отправлена'})
    }
