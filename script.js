// calcuteTax
function calculateTax(amount) {
    const taxRate = 0.1;
    return amount * taxRate;
}

// convertToUpperCase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// findMaximum
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// isPalindrome
function isPalindrome(word) {
    if (word === word.isPalindrome) {
        return true;
    } else {
        return false;
    }
}

// calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage / 100);
    return originalPrice - discountAmount;
}