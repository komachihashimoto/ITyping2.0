'use strict';

document.addEventListener('turbo:load', () => {
    Turbo.session.drive = false;
  });

    const questions = [
    "algorithm", "API", "application", "backup", "bandwidth", "binary", "bit", "byte", 
    "cache", "client", "cloud", "compiler", "compression", "cookie", "CPU", "database",
    "debug", "desktop", "development", "disk", "DNS", "domain", "driver", "email",
    "encryption", "firewall", "firmware", "frontend", "FTP", "gigabyte",
    "graphics","GUI","hardware","HTML","HTTP","HTTPS","hyperlink",
    "IDE","index","internet","IP","Java","JavaScript","kernel","keyboard",
    "LAN","link","Linux","login","malware","memory","monitor",
    "motherboard","mouse","multimedia","network","node",
    "offline","online","opensource","operatingsystem",
    "password","PHP","pixel","platform",
    "protocol","Python","query",
    "RAM","resolution",
    "router","runtime",
    "scriptinglanguage","Ajax", "algorithmic", "applet", "argument", "array", "ASP.NET", "assembler", 
    "asynchronous", "authentication", "backdoor", "bandpass", "baseband", 
    "benchmarking", "BIOS", "bitrate", "blockchain", "Bluetooth",
    "bookmark", "booting", "botnet", "breadcrumb", "broadband",
    "buffer", "bugfix", "busbar", "bytecode",
    "C++", "callback", "CAPTCHA",
    "chipset","CLI","client-server","clipboard",
    "COBOL","codec","commandline","comment","compiler",
    "computing","concatenation","conditional","configuration",
    "connectivity","constructor","container",
    "CORS","crawling","cryptography",
    "CSS","CSV","cybersecurity",
    "daemon","dataflow","datagram",
    "debugger","decryption","defragmentation",
    "dequeue","dereference","DHCP","daemon","dataflow","datagram",
    "debugger","decryption","defragmentation","dequeue","dereference","DHCP","dialup","digital","diode",
    "directx","disassembler","DLL","DNSSEC","doctype",
    "DOM","dotnet","download","drag-and-drop",
    "DSL","DTD","dualboot",
    "Eclipse","ECMAScript","edgecomputing",
    "EEPROM","EIGRP","Elasticsearch",
    "embed","emoji","emulator",
    "encryptionkey","endpoint",
    "EntityFramework",
    "EPROM","Ethernet",
    "eventhandler",
    "exceptionhandling",
    "executable",
    "Express.js",
    "extranet",
    "failover",
    "favicon",
    "FDDI",
    "fetchAPI",
    "FiberOptic","FIFO", "fileserver", "firewire", "firmware", "flash", "flavor", "floatingpoint",
    "flowchart", "flush", "font", "formfactor", "framework", "frontend",
    "fullstack", "functionality", "gaming", "gateway", 
    "GCC", "GIF", "git", "glitch", 
    "globbing", "Golang","gradient","graphicscard","grid", "gzip", "hackathon", "handle", "hashing", "haskell", 
    "header", "heap", "hexadecimal", "hierarchy", "hosting", 
    "HTML5", "HTTP2", "HTTPS", "hyperthreading", 
    "IDE", "iframe", "IMAP", "immutable","inheritance", "input", "instance", "integer", "interface", 
    "interpreter", "IoT", "iteration", "JavaFX", 
    "JDK", "JIT", "join", "JSON", 
    "JVM", "keyframe", "keyword","lambda", "LAN", "laptop", "latency", "layer", 
    "LDAP", "library", "linker", "Linux", 
    "list", "localhost", "lock", "logarithm", 
    "login", "loop", "machinelearning",
];

    const entered          = document.getElementById('entered');
    const remained         = document.getElementById('remained');
    const inputText        = document.getElementById('inputText');
    const game             = document.getElementById('game');
    const message          = document.getElementById('message');
    const replayBtn        = document.getElementById('replayBtn');
    const startBtn         = document.getElementById('startBtn');
    const backBtn          = document.getElementById('backBtn');
    const detailsBtn       = document.getElementById('detailsBtn');
    const startPage        = document.getElementById('startPage');
    const detailsPage      = document.getElementById('detailsPage');
    const formPage         = document.getElementById('formPage');
    const rankPage         = document.getElementById('rankPage');
    const timeElement      = document.getElementById('time');
    const countdownElement = document.getElementById('countdown');
    const second           = document.getElementById('second');
    const countSound       = document.getElementById('countSound');
    const lastCountSound   = document.getElementById('lastCountSound');
    const clearSound       = document.getElementById('clearSound');
    const typingSound      = document.getElementById('typingSound');
    const missSound        = document.getElementById('missSound');
    const resultSound      = document.getElementById('resultSound');
    const btnSound         = document.getElementById('btnSound');
    const miss             = document.getElementById('miss');
    const WPM              = document.getElementById('WPM');
    const accuracyLate     = document.getElementById('accuracyLate');
    const score            = document.getElementById('score');
    const saveBtn          = document.getElementById('saveBtn');
    const submitBtn        = document.getElementById('submitBtn');
    const menuBtn          = document.getElementById('menuBtn');
    const rankBtn          = document.getElementById('rankBtn');

    let remainedTextWords = remained.textContent.split('');
    let enteredTextWords  = [];
    let sentences         = [];
    let currentKey;
    let currentText;
    let countdown;
    let missCount         = 0;
    let typeCount         = 0;
    let totalType         = 0;
    let scoreCount        = 0;

    //カウントダウン音
    function playCount() {
        countSound.currentTime = 0;
        countSound.play();
    }

    //ラストカウントダウン音
    function playLastCount() {
        lastCountSound.currentTime = 0;
        lastCountSound.play();
    }

    //クリア音
    function playClear() {
        clearSound.currentTime = 0;
        clearSound.play();
    }

    //タイピング音
    function playTyping() {
        typingSound.currentTime = 0;
        typingSound.play();
    }

    //ミス音
    function playMiss() {
        missSound.currentTime = 0;
        missSound.play();
    }

    //リザルト音
    function playResult() {
        resultSound.play();
    }

    //各ボタン音
    function playBtn() {
        resultSound.pause();
        resultSound.currentTime = 0;
        btnSound.currentTime = 0;
        btnSound.play();
    }


    //startボタンを押された時の処理
    startBtn.addEventListener('click', () => {
        playBtn(); //サウンド再生
        countdownElement.classList.remove('hidden');
        startPage.classList.add('hidden');
        let countdownTime = 3; // カウントダウンの時間（秒）

        // カウントダウンを開始
    countdown = setInterval(function() {
        if(countdownTime > 0) {
            if(Number.isInteger(countdownTime)) {
                playCount();
            };
            second.innerText = countdownTime;
            countdownTime--;
        } else {
            playLastCount();
            clearInterval(countdown);
            countdownElement.classList.add('hidden');
            game.classList.remove('hidden');
            inputText.focus();

     
        //配列questionからランダムで10個配列sentencesに代入
        for(let i = 0; i < 2; i++){
            let index = Math.floor(Math.random() * questions.length);
            sentences.push(questions[index]);
            questions.splice(index, 1);
        };

        // 新しい問題文をランダムにセットする関数
        const setQuestion = () => {

            // 問題文をランダムで選ぶ
            currentKey = Math.floor( Math.random() * sentences.length );
            currentText = sentences[ currentKey ];

            // 一度選ばれた問題は配列から削除
            sentences.splice(currentKey, 1);

            // 画面に新しい問題文をセット
            entered.textContent = '';
            remained.textContent = currentText;

            // これまでフォームに入力された値をリセット
            inputText.value = '';

            // 「入力済み文字」「未入力文字」の配列の中身をリセット
            enteredTextWords = [];
            remainedTextWords = currentText.split('');
        };
        setQuestion();

            //カウントスタート
            let startTime = performance.now();

        //入力された文字の正誤判定とその後の処理
        document.addEventListener('input', (e) => {

                //大文字小文字の識別なし
            if(remainedTextWords[0].toLowerCase() === e.data.toLowerCase()){

                //タイピング音
                playTyping();

                //正タイピング回数
                typeCount = typeCount + 1;

                // 入力済み文字の配列の最後に1文字追加
                enteredTextWords.push( remainedTextWords[0] );
                // 未入力文字の配列の先頭から1文字削除
                remainedTextWords.shift();

                // 入力済みテキスト＆未入力テキストを連結して画面表示
                entered.textContent = enteredTextWords.join('');
                remained.textContent = remainedTextWords.join('');

                // 全文字入力したら新しい問題文をセット
                if(remainedTextWords.length <= 0){
                    if(sentences.length <= 0){
                        playClear(); //サウンド再生
                        playResult(); //*
                        game.classList.add('hidden'); // ゲーム画面を非表示
                        message.classList.remove('hidden'); // 終了メッセージ表示
                        let endTime = performance.now();
                        let elapsedTime = endTime - startTime;
                        let elapsedTimeInSeconds = elapsedTime / 1000; // ミリ秒を秒に変換
                        timeElement.textContent = `time : ${elapsedTimeInSeconds.toFixed(2)} `; //タイム表示(小数点第2位)
                        let wpm = ((typeCount / elapsedTimeInSeconds) * 60) / 5; //wpmの計算
                        totalType = typeCount + missCount; //総タイプ数の計算
                        let accuracy = (typeCount / totalType) * 100; //正タイプ率の計算
                        accuracyLate.textContent = `accuracy : ${accuracy.toFixed(2)}%`; //正タイプ率の表示
                        WPM.textContent = `wpm : ${wpm.toFixed(2)}`; //wpmの表示
                        miss.textContent = `miss : ${missCount} `; //ミス数の表示
                        scoreCount = wpm * accuracy ; //スコアの計算
                        score.textContent = `score : ${Math.round(scoreCount)}`; //スコアの表示
                        localStorage.setItem('point', scoreCount);  // スコアをlocalStorageに保存
                    }else{
                        playClear(); //サウンド再生
                        setQuestion(); // 新しい問題文をセット
                    }
                }
            }else{
                missCount = missCount + 1;
                playMiss(); //サウンド再生
            }
        });
    }
    }, 1000);
    });

    //detailsボタンが押された時の処理
    detailsBtn.addEventListener('click', () => {
        playBtn(); //サウンド再生
        detailsPage.classList.remove('hidden');
        startPage.classList.add('hidden');
    });

    //rankボタンが押された時の処理
    rankBtn.addEventListener('click', () => {
        playBtn(); //サウンド再生
        rankPage.classList.remove('hidden');
        startPage.classList.add('hidden');
    });

    //menuボタンが押された時の処理
    [backBtn, replayBtn, menuBtn].forEach(btn => {
    btn.addEventListener('click', () => {
        playBtn(); //サウンド再生
        setTimeout(()=> {window.location.reload();
        },300);
    });
    });

    //saveボタンが押された時の処理
    saveBtn.addEventListener('click', () => {
        playBtn(); //サウンド再生
        formPage.classList.remove('hidden');
        message.classList.add('hidden');
        let point = localStorage.getItem('point');  // スコアをlocalStorageから取得
            document.getElementById('gameScore').value = point;
            localStorage.clear();
        }
    );

    //submitボタンが押された時の処理
    submitBtn.addEventListener('click', () => {
        playBtn(); //サウンド再生
    });

