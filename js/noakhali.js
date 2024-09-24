document.getElementById('btn-noa-donation')
            .addEventListener('click', function () {
                // const balanceText = document.getElementById('balance').innerText;
                // const balanceNumber = parseFloat(balanceText);
                const balanceNumber = getTextFieldValue('balance');
                const inputMoney1 = getInputValue('input-1')

                if (isNaN(inputMoney1)) {
                    alert('Failed to donate');
                    document.getElementById('input-1').value = '';
                    return;
                }
                if (inputMoney1 > balanceNumber) {
                    alert('Not Enough Balance To Donate');
                    document.getElementById('input-1').value = '';
                    return;
                }
                else {
                    // const balanceNoa = document.getElementById('taka-1').innerText;
                    const balanceNoaNumber = getTextFieldValue('taka-1');
                    const newBalance1 = balanceNoaNumber + inputMoney1;
                    const mainBalance = balanceNumber - inputMoney1;
                    document.getElementById('balance').innerText = mainBalance;
                    document.getElementById('taka-1').innerText = newBalance1;
                    document.getElementById('input-1').value = '';
                    document.getElementById('my_modal_5').showModal();
                    const time = new Date();
                    const p = document.createElement('p');
                    const p1 = document.createElement('p');
                    p.innerText = `${inputMoney1} Tk. is Donated for Flood Relief in Noakhali`;
                    p1.innerText = `${time}`;
                    document.getElementById('history-container').appendChild(p);
                    document.getElementById('history-container').appendChild(p1);
                }            
            })