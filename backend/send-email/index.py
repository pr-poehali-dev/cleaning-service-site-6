import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта ПроЧистка на почту prochistka65@gmail.com"""

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

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '')
    phone = body.get('phone', '')
    service = body.get('service', '')
    message = body.get('message', '')

    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    sender = 'prochistka65@gmail.com'
    recipient = 'prochistka65@gmail.com'

    msg = MIMEMultipart()
    msg['From'] = sender
    msg['To'] = recipient
    msg['Subject'] = f'Новая заявка с сайта — {name}'

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 500px; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
        <h2 style="color: #1a6b2e; margin-top: 0;">Новая заявка с сайта ПроЧистка</h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;">Имя:</td><td style="padding: 8px 0; font-weight: bold;">{name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Телефон:</td><td style="padding: 8px 0; font-weight: bold;"><a href="tel:{phone}" style="color: #1a6b2e;">{phone}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Услуга:</td><td style="padding: 8px 0;">{service or 'Не указана'}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Комментарий:</td><td style="padding: 8px 0;">{message or '—'}</td></tr>
        </table>
    </div>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(sender, smtp_password)
        server.sendmail(sender, recipient, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }
