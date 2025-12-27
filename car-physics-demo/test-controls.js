// Simple test to verify car controls are working
// Run this in browser console after page loads

console.log('=== Car Physics Control Test ===');

// Check if car body exists
if (typeof carBody !== 'undefined') {
    console.log('✅ Car body found');
    console.log('Position:', carBody.position);
    console.log('Velocity:', carBody.velocity);
} else {
    console.log('❌ Car body not found - checking window scope');
}

// Test keyboard events
let testResults = {
    keydown: false,
    keyup: false,
    preventDefault: false
};

const testHandler = (e) => {
    console.log('✅ Keyboard event detected:', e.key);
    testResults.keydown = true;
    if (e.defaultPrevented) {
        testResults.preventDefault = true;
    }
};

document.addEventListener('keydown', testHandler);

console.log('Press any WASD or Arrow key to test...');
console.log('Then check: window.carBody.velocity to see if car is moving');

setTimeout(() => {
    document.removeEventListener('keydown', testHandler);
    console.log('Test results:', testResults);
}, 5000);
