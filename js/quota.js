document.getElementById('btn-quota-donation')
            .addEventListener('click', function () {
                const balanceText = document.getElementById('balance').innerText;
                const balanceNumber = parseFloat(balanceText);
                const inputMoney3 = getInputValue('input-3')

                if (isNaN(inputMoney3)) {
                    alert('Failed to donate');
                    return;
                }
                if (inputMoney3 > balanceNumber) {
                    alert('Not Enough Balance To Donate');
                    return;
                }
                else {
                    const balanceQuota = document.getElementById('taka-3').innerText;
                    const balanceQuotaNumber = parseFloat(balanceQuota);
                    const newBalance3 = balanceQuotaNumber + inputMoney3;
                    const mainBalance = balanceNumber - inputMoney3;
                    document.getElementById('balance').innerText = mainBalance;
                    document.getElementById('taka-3').innerText = newBalance3;
                    document.getElementById('my_modal_5').showModal();
                }            
            })