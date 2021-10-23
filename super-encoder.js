// Import the encryptors functions here.
const encryptors = require('./encryptors.js');
caesarCipher = encryptors.caesar;
symbolCipher = encryptors.symbol;
reverseCipher = encryptors.reverse;

// Define the random number for the caesar cypher. This value must be between 0 and 26


const randomumber = 4;

const encodeMessage = (str) => {
	// Use the encryptor functions here.
	let encodedMessage = caesarCipher(str, randomumber);
	encodedMessage = symbolCipher(encodedMessage);
	encodedMessage = reverseCipher(encodedMessage);
	return encodedMessage;
  }
  
  const decodeMessage = (str) => {
	return caesarCipher(symbolCipher(reverseCipher(str)),-randomumber)
	
  }
  
  // User input / output.
  
  const handleInput = (userInput) => {
	const str = userInput.toString().trim();
	let output;
	if (process.argv[2] === 'encode') {
	  output = encodeMessage(str);
	} 
	if (process.argv[2] === 'decode') {
	  output = decodeMessage(str);
	} 
	
	process.stdout.write(output + '\n');
	process.exit();
  }
  
  // Run the program.
  process.stdout.write('Enter the message you would like to encrypt...\n> ');
  process.stdin.on('data', handleInput);