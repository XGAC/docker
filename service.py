from flask import Flask, request, jsonify

app = Flask(__name__)
@app.route('/', methods=['GET'])
def get_ip():
    # Get the IP address of the source that called the endpoint
    ip_address = request.remote_addr
    # Return the IP address as a JSON response
    return jsonify({'ip_address': ip_address})
if __name__ == '__main__':
    print('Starting Server...')
    app.run()