document.getElementById('btn-quota-donation')
            .addEventListener('click', function () {
                // const balanceText = document.getElementById('balance').innerText;
                const balanceNumber = getTextFieldValue('balance');
                const inputMoney3 = getInputValue('input-3');

                if (isNaN(inputMoney3)) {
                    alert('Failed to donate');
                    document.getElementById('input-3').value = '';

                    return;
                }
                if (inputMoney3 > balanceNumber) {
                    alert('Not Enough Balance To Donate');
                    document.getElementById('input-3').value = '';
                    return;
                }
                else {
                    // const balanceQuota = document.getElementById('taka-3').innerText;
                    const balanceQuotaNumber = getTextFieldValue('taka-3');
                    const newBalance3 = balanceQuotaNumber + inputMoney3;
                    const mainBalance = balanceNumber - inputMoney3;
                    document.getElementById('balance').innerText = mainBalance;
                    document.getElementById('taka-3').innerText = newBalance3;
                    document.getElementById('input-3').value = '';
                    document.getElementById('my_modal_5').showModal();
                    const time = new Date();
                    const p = document.createElement('p');
                    const p1 = document.createElement('p');
                    p.innerText = `${inputMoney3} Tk. is Donated for Injured in the Quota Movement`;
                    p1.innerText = `${time}`;
                    document.getElementById('history-container').appendChild(p);
                    document.getElementById('history-container').appendChild(p1);
                }            
            })