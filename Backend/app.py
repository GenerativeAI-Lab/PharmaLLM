from flask_cors import CORS
from flask import Flask, request, jsonify
from transformers import AutoModelForCausalLM, AutoTokenizer

app = Flask(__name__)
CORS(app)

# Load the model and tokenizer
model_path = ""
tokenizer = AutoTokenizer.from_pretrained(model_path)
model = AutoModelForCausalLM.from_pretrained(model_path, device_map="auto", torch_dtype='auto').eval()

@app.route('/generate_response', methods=['POST'])
def generate_response():
    # Get user input from the request
    user_input = request.json.get('user_input')
    print(user_input)
    # Prepare input for the model
    messages = [{"role": "user", "content": user_input}]
    input_ids = tokenizer.apply_chat_template(conversation=messages, tokenize=True, add_generation_prompt=True, return_tensors='pt')

    # Generate response
    output_ids = model.generate(input_ids.to('cpu'))
    response = tokenizer.decode(output_ids[0][input_ids.shape[1]:], skip_special_tokens=True)
    print(response)
    
    # Return response to the frontend
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)