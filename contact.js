// 
// Toggle the chatbox visibility
function toggleChatbox() {
    const chatbox = document.getElementById('chatbot-window');
    if (chatbox.style.display === 'none' || chatbox.style.display === '') {
        chatbox.style.display = 'block';
    } else {
        chatbox.style.display = 'none';
    }
}

// Send a message from the user
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (message) {
        // Create user message element
        const chatBody = document.getElementById('chat-body');
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = message;
        chatBody.appendChild(userMessage);
        
        // Clear the input field
        userInput.value = '';

        // Simulate a bot response
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot-message';
            botMessage.textContent = 'This is a bot response to: ' + message;
            chatBody.appendChild(botMessage);

            // Scroll to the bottom of the chat
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }
}

// Initialize the chatbox as hidden
document.addEventListener('DOMContentLoaded', () => {
    const chatbox = document.getElementById('chatbot-window');
    chatbox.style.display = 'none'; // Ensure chatbox is initially hidden
});