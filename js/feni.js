document.getElementById('btn-feni-donation')
            .addEventListener('click', function () {
                const balanceText = document.getElementById('balance').innerText;
                const balanceNumber = parseFloat(balanceText);
                const inputMoney2 = getInputValue('input-2')

                if (isNaN(inputMoney2)) {
                    alert('Failed to donate');
                    return;
                }
                if (inputMoney2 > balanceNumber) {
                    alert('Not Enough Balance To Donate');
                    return;
                }
                else {
                    const balanceFeni = document.getElementById('taka-2').innerText;
                    const balanceFeniNumber = parseFloat(balanceFeni);
                    const newBalance2 = balanceFeniNumber + inputMoney2;
                    const mainBalance = balanceNumber - inputMoney2;
                    document.getElementById('balance').innerText = mainBalance;
                    document.getElementById('taka-2').innerText = newBalance2;
                    document.getElementById('my_modal_5').showModal();
                }            
            })