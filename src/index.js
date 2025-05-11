 // Логіка гри
    const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'];
    let currentKeyIndex = 0;

    const keyDisplay = document.getElementById('key');
    const newGameButton = document.getElementById('newGame');

    function getRandomKey() {
      return keys[Math.floor(Math.random() * keys.length)];
    }

    function startNewGame() {
      currentKeyIndex = 0;
      currentKey = getRandomKey();
      keyDisplay.textContent = currentKey;
      PNotify.success({
        text: 'Гру розпочато! Натисніть правильну клавішу.',
        delay: 1500
      });
    }

    let currentKey = getRandomKey();
    keyDisplay.textContent = currentKey;

    document.addEventListener('keydown', (event) => {
      if (event.key === currentKey) {
        currentKey = getRandomKey();
        keyDisplay.textContent = currentKey;
        PNotify.success({
          text: 'Правильно!',
          delay: 1000
        });
      } else {
        PNotify.error({
          text: `Помилка! Ви натиснули "${event.key}", а треба "${currentKey}".`,
          delay: 2000
        });
      }
    });

    document.addEventListener('keypress', (event) => {
      event.preventDefault(); // Запобігає дії за замовчуванням
    });

    newGameButton.addEventListener('click', startNewGame);


    const chartData = {
  labels: [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380,
        420, 450, 500, 550, 600, 650, 700, 750, 800, 850,
        900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350
      ],
      borderColor: "#2196f3",
      backgroundColor: "rgba(33, 150, 243, 0.2)",
      fill: true,
      tension: 0.3,
      borderWidth: 2
    }
  ]
};

const config = {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      },
      title: {
        display: true,
        text: "Статистика продажів за останній місяць"
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "День місяця"
        }
      },
      y: {
        title: {
          display: true,
          text: "Сума продажів"
        },
        beginAtZero: true
      }
    }
  }
};

const ctx = document.getElementById("sales-chart").getContext("2d");
const salesChart = new Chart(ctx, config);
