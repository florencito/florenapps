from flask import Flask, request, jsonify
import qrcode
import io
import base64
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # permite peticiones desde frontend externo/local

@app.route('/generate', methods=['POST'])
def generate_qr():
    data = request.get_json()
    url = data.get('url')

    if not url:
        return jsonify({'error': 'URL is required'}), 400

    qr = qrcode.make(url)
    buffer = io.BytesIO()
    qr.save(buffer, format="PNG")
    img_base64 = base64.b64encode(buffer.getvalue()).decode()

    return jsonify({'qr_code': img_base64})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
