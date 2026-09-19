document.addEventListener('DOMContentLoaded', () => {
    let currentTerm = 6;
    const feeRates = { 3: 0.03, 6: 0.045, 9: 0.06, 12: 0.075 };

    const productPriceInput = document.getElementById('productPrice');
    const prepaidPercentSelect = document.getElementById('prepaidPercent');
    const resPrepaid = document.getElementById('resPrepaid');
    const resLoan = document.getElementById('resLoan');
    const resFee = document.getElementById('resFee');
    const resMonthly = document.getElementById('resMonthly');
    const termButtons = document.querySelectorAll('.term-btn');

    function formatVND(amount) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    }

    function calculateInstallment() {
        if (!productPriceInput) return;

        const price = parseFloat(productPriceInput.value) || 0;
        const prepaidPercent = parseFloat(prepaidPercentSelect.value) || 0;

        const prepaidAmount = price * (prepaidPercent / 100);
        const loanAmount = price - prepaidAmount;
        const feeRate = feeRates[currentTerm] || 0.045;
        const feeAmount = loanAmount * feeRate;
        const totalLoanAndFee = loanAmount + feeAmount;
        const monthlyPayment = currentTerm > 0 ? (totalLoanAndFee / currentTerm) : 0;

        resPrepaid.innerText = formatVND(prepaidAmount);
        resLoan.innerText = formatVND(loanAmount);
        resFee.innerText = formatVND(feeAmount);
        resMonthly.innerText = formatVND(Math.round(monthlyPayment));
    }

    termButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            termButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTerm = parseInt(btn.getAttribute('data-term'));
            calculateInstallment();
        });
    });

    if (productPriceInput) {
        productPriceInput.addEventListener('input', calculateInstallment);
    }
    if (prepaidPercentSelect) {
        prepaidPercentSelect.addEventListener('change', calculateInstallment);
    }

    calculateInstallment();
});