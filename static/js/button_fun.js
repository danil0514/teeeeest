// Находим div кнопку по id
var button_play = document.getElementById('button_play');
var button_wallet = document.getElementById('button_wallet');
var button_rules = document.getElementById('button_rules');

// Добавляем прослушиватель событий на щелчок по кнопке
button_play.addEventListener('click', function() {
    document.getElementById("content_menu").style.display = "none";
    document.getElementById("content_play_lobby").style.display = "block";
});

button_wallet.addEventListener('click', function() {
    document.getElementById("content_menu").style.display = "none";
});

button_rules.addEventListener('click', function() {
    document.getElementById("content_menu").style.display = "none";
});

document.addEventListener('click', function(event) {
    var comboBox = document.querySelector('.customComboBox_price_play');
    var selectedOption = comboBox.querySelector('.selectedOption_price_play');
    var optionsList = comboBox.querySelector('.optionsList_price_play');
    var tonOption = document.getElementById('price_ton_select');
    var usdtOption = document.getElementById('price_usdt_select');
    var downArrowImage = comboBox.querySelector('.image_down_arrow');
    var tonCoin = comboBox.querySelector('.select_TON_coint_play');
    var usdtCoin = comboBox.querySelector('.select_USDT_coint_play');
    var sizeBet_ton = document.querySelector('.customComboBox_size_bet_ton_play');
    var sizeBet_usdt = document.querySelector('.customComboBox_size_bet_usdt_play');

    var selectPriceCoin_server = '';

    if (event.target.closest('.selectedOption_price_play')) {
        if (optionsList.style.display === 'block') {
            optionsList.style.display = 'none'; // Закрываем список, если он уже открыт
        } else {
            optionsList.style.display = 'block'; // Открываем список, если он закрыт
            sizeBet_ton.style.display = 'none';
            sizeBet_usdt.style.display = 'none';
        }
    } else if (!event.target.closest('.optionsList_price_play')) {
        optionsList.style.display = 'none'; // Закрываем список, если клик был вне списка
    }


    tonOption.addEventListener('click', function() {
        var selectedValue = this.textContent;
        selectPriceCoin_server = 0;
        tonCoin.style.display = 'block';
        usdtCoin.style.display = 'none';
        downArrowImage.style.display = 'none';
        optionsList.style.display = 'none'; // Закрыть список после выбора
        sizeBet_ton.style.display = 'block';
        sizeBet_usdt.style.display = 'none';
    });

    usdtOption.addEventListener('click', function() {
        var selectedValue = this.textContent;
        selectPriceCoin_server = 1;
        tonCoin.style.display = 'none';
        usdtCoin.style.display = 'block';
        downArrowImage.style.display = 'none';
        optionsList.style.display = 'none'; // Закрыть список после выбора
        sizeBet_ton.style.display = 'none';
        sizeBet_usdt.style.display = 'block';
    });

});

document.addEventListener('click', function(event) {
    var comboBox = document.querySelector('.customComboBox_size_bet_ton_play');
    var optionsList = comboBox.querySelector('.optionsList_size_bet_play_ton');
    var selectedOption = comboBox.querySelector('.selectedOption_size_bet_ton_play');
    var ton025 = document.getElementById('price_size_ton_025_select');
    var ton05 = document.getElementById('price_size_ton_05_select');
    var ton1 = document.getElementById('price_size_ton_1_select');
    var ton2 = document.getElementById('price_size_ton_2_select');
    var ton5 = document.getElementById('price_size_ton_5_select');

    var size_ton_025 = comboBox.querySelector('.select_TON_025_coint_play');
    var size_ton_05 = comboBox.querySelector('.select_TON_05_coint_play');
    var size_ton_1 = comboBox.querySelector('.select_TON_1_coint_play');
    var size_ton_2 = comboBox.querySelector('.select_TON_2_coint_play');
    var size_ton_5 = comboBox.querySelector('.select_TON_5_coint_play');
    var downArrowImage = comboBox.querySelector('.image_down_arrow_size_ton');
    var append_button_play = document.querySelector('.button-container-search-user');


    if (event.target.closest('.selectedOption_size_bet_ton_play')) {
        if (optionsList.style.display === 'block') {
            optionsList.style.display = 'none'; // Закрываем список, если он уже открыт
        } else {
            optionsList.style.display = 'block'; // Открываем список, если он закрыт
            append_button_play.display = 'none';
        }
    } else if (!event.target.closest('.optionsList_price_play')) {
        optionsList.style.display = 'none'; // Закрываем список, если клик был вне списка
    }

    ton025.addEventListener('click', function() {
        var selectedValue = this.textContent;
        selectsize_server = 0.5;
        size_ton_025.style.display = 'block';
        size_ton_05.style.display = 'none';
        size_ton_1.style.display = 'none';
        size_ton_2.style.display = 'none';
        size_ton_5.style.display = 'none';
        downArrowImage.style.display = 'none';
        optionsList.style.display = 'none'; 
        append_button_play.style.display = 'block'; // Закрыть список после выбора
    });

    ton05.addEventListener('click', function() {
        var selectedValue = this.textContent;
        selectsize_server = 1;
        size_ton_025.style.display = 'none';
        size_ton_05.style.display = 'block';
        size_ton_1.style.display = 'none';
        size_ton_2.style.display = 'none';
        size_ton_5.style.display = 'none';
        downArrowImage.style.display = 'none';
        optionsList.style.display = 'none'; // Закрыть список после выбора
        append_button_play.style.display = 'block'; // Закрыть список после выбора
    });
    ton1.addEventListener('click', function() {
        var selectedValue = this.textContent;
        selectsize_server = 2;
        size_ton_025.style.display = 'none';
        size_ton_05.style.display = 'none';
        size_ton_1.style.display = 'block';
        size_ton_2.style.display = 'none';
        size_ton_5.style.display = 'none';
        downArrowImage.style.display = 'none';
        optionsList.style.display = 'none'; // Закрыть список после выбора
        append_button_play.style.display = 'block';
    });
    ton2.addEventListener('click', function() {
        var selectedValue = this.textContent;
        selectsize_server = 5;
        size_ton_025.style.display = 'none';
        size_ton_05.style.display = 'none';
        size_ton_1.style.display = 'none';
        size_ton_2.style.display = 'block';
        size_ton_5.style.display = 'none';
        downArrowImage.style.display = 'none';
        optionsList.style.display = 'none'; // Закрыть список после выбора
        append_button_play.style.display = 'block';
    });  
    
    ton5.addEventListener('click', function() {
        var selectedValue = this.textContent;
        selectsize_server = 10;
        size_ton_025.style.display = 'none';
        size_ton_05.style.display = 'none';
        size_ton_1.style.display = 'none';
        size_ton_2.style.display = 'none';
        size_ton_5.style.display = 'block';
        downArrowImage.style.display = 'none';
        optionsList.style.display = 'none'; // Закрыть список после выбора
        append_button_play.style.display = 'block';
    });
});

document.addEventListener('click', function(event) {
    var comboBox = document.querySelector('.customComboBox_size_bet_usdt_play');
    var optionsList = comboBox.querySelector('.optionsList_size_bet_play_usdt');
    var selectedOption = comboBox.querySelector('.selectedOption_size_bet_usdt_play');
    var usdt05 = document.getElementById('price_size_usdt_05_select');
    var usdt1 = document.getElementById('price_size_usdt_1_select');
    var usdt2 = document.getElementById('price_size_usdt_2_select');
    var usdt5 = document.getElementById('price_size_usdt_5_select');
    var usdt10 = document.getElementById('price_size_usdt_10_select');

    var size_usdt_05 = comboBox.querySelector('.select_USDT_05_coint_play');
    var size_usdt_1 = comboBox.querySelector('.select_USDT_1_coint_play');
    var size_usdt_2 = comboBox.querySelector('.select_USDT_2_coint_play');
    var size_usdt_5 = comboBox.querySelector('.select_USDT_5_coint_play');
    var size_usdt_10 = comboBox.querySelector('.select_USDT_10_coint_play');
    var downArrowImage = comboBox.querySelector('.image_down_arrow_size_usdt');
    var append_button_play = document.querySelector('.button-container-search-user')

    if (event.target.closest('.selectedOption_size_bet_usdt_play')) {
        if (optionsList.style.display === 'block') {
            optionsList.style.display = 'none'; // Закрываем список, если он уже открыт
        } else {
            optionsList.style.display = 'block'; // Открываем список, если он закрыт
            append_button_play.display = 'none';
        }
    } else if (!event.target.closest('.optionsList_price_play')) {
        optionsList.style.display = 'none'; // Закрываем список, если клик был вне списка
    }

    usdt05.addEventListener('click', function() {
        var selectedValue = this.textContent;
        selectsize_server = 0.5;
        size_usdt_05.style.display = 'block';
        size_usdt_1.style.display = 'none';
        size_usdt_2.style.display = 'none';
        size_usdt_5.style.display = 'none';
        size_usdt_10.style.display = 'none';
        downArrowImage.style.display = 'none';
        optionsList.style.display = 'none'; // Закрыть список после выбора
        append_button_play.style.display = 'block';
    });

    usdt1.addEventListener('click', function() {
        var selectedValue = this.textContent;
        selectsize_server = 0.5;
        size_usdt_05.style.display = 'none';
        size_usdt_1.style.display = 'block';
        size_usdt_2.style.display = 'none';
        size_usdt_5.style.display = 'none';
        size_usdt_10.style.display = 'none';
        downArrowImage.style.display = 'none';
        optionsList.style.display = 'none'; // Закрыть список после выбора
        append_button_play.style.display = 'block';

    });

    usdt2.addEventListener('click', function() {
        var selectedValue = this.textContent;
        selectsize_server = 0.5;
        size_usdt_05.style.display = 'none';
        size_usdt_1.style.display = 'none';
        size_usdt_2.style.display = 'block';
        size_usdt_5.style.display = 'none';
        size_usdt_10.style.display = 'none';
        downArrowImage.style.display = 'none';
        optionsList.style.display = 'none'; // Закрыть список после выбора
        append_button_play.style.display = 'block';

    });
    usdt5.addEventListener('click', function() {
        var selectedValue = this.textContent;
        selectsize_server = 0.5;
        size_usdt_05.style.display = 'none';
        size_usdt_1.style.display = 'none';
        size_usdt_2.style.display = 'none';
        size_usdt_5.style.display = 'block';
        size_usdt_10.style.display = 'none';
        downArrowImage.style.display = 'none';
        optionsList.style.display = 'none'; // Закрыть список после выбора
        append_button_play.style.display = 'block';

    });
    
    usdt10.addEventListener('click', function() {
        var selectedValue = this.textContent;
        selectsize_server = 0.5;
        size_usdt_05.style.display = 'none';
        size_usdt_1.style.display = 'none';
        size_usdt_2.style.display = 'none';
        size_usdt_5.style.display = 'none';
        size_usdt_10.style.display = 'block';
        downArrowImage.style.display = 'none';
        optionsList.style.display = 'none'; // Закрыть список после выбора
        append_button_play.style.display = 'block';

    });
});


document.getElementById('button-back-point').addEventListener('click', function() {
    document.getElementById("content_menu").style.display = "block";
    document.getElementById("content_play_lobby").style.display = "none";
});


