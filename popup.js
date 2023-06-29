document.addEventListener('DOMContentLoaded', function () {

    // element of checkbox ,text input and scroll button
    const targets = document.querySelectorAll(`input[type="checkbox"].filterbtn`);
    const targets2 = document.querySelectorAll(`input[type="text"]`);
    let left = document.querySelector('.scrollleft');
    let right = document.querySelector('.scrollright');
    let scrolltarget = document.querySelector('.flex.left');
    const scroolloffset = 450; 
    var csscode='';

    // css code templete
    const stylecode = {
        rn:':is(div[style="position: sticky; top: var(--stickyTop, 0); z-index: 1000;"]:has(.xj7PE .xjQuN unko),header:has(unko))~div .xcSej.x3762:has(.xBwhh) { display: none;}',
        quote:':is(div[style="position: sticky; top: var(--stickyTop, 0); z-index: 1000;"]:has(.xj7PE .xjQuN unko),header:has(unko))~div .xcSej.x3762:has(.xnihJ) { display: none;}',
        nsfw:':is(div[style="position: sticky; top: var(--stickyTop, 0); z-index: 1000;"]:has(.xj7PE .xjQuN unko),header:has(unko))~div .xcSej.x3762:has(.ti-alert-triangle) { display: none !important; }',
        cw: ':is(div[style="position: sticky; top: var(--stickyTop, 0); z-index: 1000;"]:has(.xj7PE .xjQuN unko),header:has(unko))~div .xcSej.x3762:has(.xd2wm) { display: none;}',
        bot: ':is(div[style="position: sticky; top: var(--stickyTop, 0); z-index: 1000;"]:has(.xj7PE .xjQuN unko),header:has(unko))~div .xcSej.x3762:has(.xEKlD) { display: none;}',
        samesever: ':is(div[style="position: sticky; top: var(--stickyTop, 0); z-index: 1000;"]:has(.xj7PE .xjQuN .ti-whirl),header:has(.ti-whirl))~div .xcSej.x3762:not(:has(.xuevx)) { display: none; }',
        reply: ':is(div[style="position: sticky; top: var(--stickyTop, 0); z-index: 1000;"]:has(.xj7PE .xjQuN unko),header:has(unko))~div .xcSej.x3762:has(.x48yH > .x9PYN) { display: none;}',
        channel: '.xcSej.x3762:has(.xww2J) { display: none;}',
        usermute: '.xcSej.x3762:has(a[href="/@unko"]){ display: none; }',
        userrenotemute: '.xcSej.x3762:has(.xBwhh > a[href="/@unko"]){ display: none; }',
        rocket: '.xcSej.x3762:has(.xuevx){ display: none; }',
        norocket: '.xcSej.x3762:not(:has(.xuevx)) { display: none; }',
        emojibetter: ':root {    --emoji_default_size: 30px;    --emoji_margin_lr: 6px;    --emoji_margin_tb: 2px;    --emoji_max_size: 80px;    --emoji_displey_style: fill;      --emoji_window_default_height: 400px;      --emoji_window_default_width: 400px;    --emoji_autofill_max_width:  300px;    --emoji_autofill_displey_style: fill;}.emojis {  padding:  10px 5px 5px;  text-align:center;}.emojis section>.body {  display: inline !important;  padding:  0 !important;  line-height: 0;}.emojis section>.body .item{  height: auto !important;}button:has(.emoji){  aspect-ratio: auto!important;  width: fit-content !important;  contain: layout !important;  margin: 0px !important;  padding: var(--emoji_margin_tb)  var(--emoji_margin_lr)  !important;  min-height:  var(--emoji_default_size) !important;}button:has(.emoji) img{  width: auto !important;  height: var(--emoji_default_size) !important;  object-fit: var(--emoji_displey_style) !important;  object-position: 0% 50%;  max-width: var(--emoji_max_size);} .xeJ4G.xuoKL, ._emoji_1pjrm_56 {  width: auto !important;  object-fit: var(--emoji_autofill_displey_style) !important;  object-position: 0% 50%;  max-width: var(--emoji_autofill_max_width);}'
    };
    const transitioncode = "<style> * { transition: background-color .5s; } </style>"



    /*create css code and save from now settings*/
    function CreateCSS(){
        csscode="";
        //Judges which CSS to apply based on the unique attributes assigned to the HTML of the checkbox and generates code
        for (let target of targets) {
            if(target.checked){
                if(target.dataset.name == 'ti-list'){
                    csscode += stylecode[target.dataset.kinds].replaceAll('unko',"." + target.dataset.name).replaceAll('.no-add',"").replaceAll('.xj7PE .xjQuN',"") + "\n";
                } else {
                    csscode += stylecode[target.dataset.kinds].replaceAll('unko',"." + target.dataset.name).replaceAll('.no-add',"") + "\n";
                }
            }
        }
        //User Mute input
        if(targets2[0].value != ''){
            let muteuserlist = targets2[0].value.split(',');
            for(let name of muteuserlist){
                csscode += stylecode['usermute'].replaceAll('unko',name) + "\n";
            }
        }
        //User Renote Mute input
        if(targets2[1].value != ''){
            let muteuserlist = targets2[1].value.split(',');
            for(let name of muteuserlist){
                csscode += stylecode['userrenotemute'].replaceAll('unko',name) + "\n";
            }
        }
    }

    /*Update CSS from arg*/
    function UpdateCSS(styles){
        document.querySelector(`.filtercsswrapper`).innerHTML=styles;
        localStorage.setItem('lastcss',styles);
    }

    /*save current setting in localstorage*/
    function SaveSetting(){
        for (let target of targets) {
            localStorage.setItem('button-' + target.dataset.name + '-' + target.dataset.kinds, target.checked? 1 : 0);
        }
        localStorage.setItem('list-muteuser', targets2[0].value);
        localStorage.setItem('list-muteuserrenote', targets2[1].value);
        localStorage.setItem('allow-other-server', targets2[2].value);
        /*this setting use service worker. but this dont access localstorage. so save to chrome storage API*/
        chrome.storage.local.set({setting1: targets2[2].value})
        localStorage.setItem('saved' , '1');
    }

    /*load settings from localStorage*/
    function LoadSetting(){
        /*when first time, previous setup don't exist, so nothing*/
        if(!localStorage.getItem('saved')) return;
        for (let target of targets) {
            target.checked = (localStorage.getItem('button-' + target.dataset.name + '-' + target.dataset.kinds)== '1')? 1: 0;
        }
        targets2[0].value = localStorage.getItem('list-muteuser');
        targets2[1].value = localStorage.getItem('list-muteuserrenote');
        targets2[2].value = localStorage.getItem('allow-other-server');
    }


    /*scroll button event*/
    left.addEventListener(`click`, () => {
        var targetpositon = scrolltarget.scrollLeft;
        scrolltarget.scrollTo({
            left: targetpositon - scroolloffset,
            behavior: 'smooth'
          });
    })
    right.addEventListener(`click`, () => {
        var targetpositon = scrolltarget.scrollLeft;
        scrolltarget.scrollTo({
            left: targetpositon + scroolloffset,
            behavior: 'smooth'
          });
    })

    //Set　event listeners to rewrite　CSS when checkbox and textarea are changed
    for (let target of targets) {
    target.addEventListener(`change`, () => {
        CreateCSS();
        SaveSetting();
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.scripting.executeScript({
                target : {tabId : tabs[0].id},
                func : UpdateCSS,
                args : [csscode]
            });
        });
    })
    }
    for (let target of targets2) {
        target.addEventListener(`change`, () => {
            CreateCSS();
            SaveSetting();
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                chrome.scripting.executeScript({
                    target : {tabId : tabs[0].id},
                    func : UpdateCSS,
                    args : [csscode]
                });
            });
        })
    }
    LoadSetting();
    setTimeout(function(){ 
        document.querySelector(`head`).insertAdjacentHTML('beforeend', transitioncode)
    },500);
});