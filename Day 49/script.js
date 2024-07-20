document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById('expense-form');
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const categoryInput = document.getElementById('category');
    const totalAmountElement = document.getElementById('total-amount');
    const expenseList = document.getElementById('expense-list');
    const expenseChartElement = document.getElementById('expenseChart').getContext('2d');
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    function updateTotal() {
        const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
        totalAmountElement.textContent = total.toFixed(2);
    }

    function saveExpenses() {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    function renderExpenses() {
        expenseList.innerHTML = '';
        expenses.forEach((expense, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div>
                    <span class="font-bold">${expense.description}</span>
                    <span class="text-gray-600">(${expense.category})</span>
                </div>
                <div>
                    <span class="font-bold">NPR ${parseFloat(expense.amount).toFixed(2)}</span>
                    <button data-index="${index}" class="edit-btn">Edit</button>
                    <button data-index="${index}" class="delete-btn">Delete</button>
                </div>
            `;
            expenseList.appendChild(li);
        });
    }

    function renderChart() {
        const categories = [...new Set(expenses.map(exp => exp.category))];
        const categoryTotals = categories.map(category => {
            return expenses.filter(exp => exp.category === category)
                .reduce((acc, exp) => acc + parseFloat(exp.amount), 0);
        });

        console.log('Categories:', categories);
        console.log('Category Totals:', categoryTotals);

        new Chart(expenseChartElement, {
            type: 'bar',
            data: {
                labels: categories,
                datasets: [{
                    label: 'Expenses by Category',
                    data: categoryTotals,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const description = descriptionInput.value.trim();
        const amount = parseFloat(amountInput.value.trim());
        const category = categoryInput.value;
        if (description && !isNaN(amount)) {
            expenses.push({ description, amount, category });
            saveExpenses();
            renderExpenses();
            updateTotal();
            renderChart();
            expenseForm.reset();
        }
    });

    expenseList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.dataset.index;
            expenses.splice(index, 1);
            saveExpenses();
            renderExpenses();
            updateTotal();
            renderChart();
        } else if (e.target.classList.contains('edit-btn')) {
            const index = e.target.dataset.index;
            const expense = expenses[index];
            descriptionInput.value = expense.description;
            amountInput.value = expense.amount;
            categoryInput.value = expense.category;
            expenses.splice(index, 1);
            saveExpenses();
            renderExpenses();
            updateTotal();
            renderChart();
        }
    });

    renderExpenses();
    updateTotal();
    renderChart();
});
