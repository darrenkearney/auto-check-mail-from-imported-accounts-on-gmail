console.log('[OKAY] Loaded Auto Check Mail Now for Imported Accounts in Gmail');

function auto_mail_checker(checkInterval) {

    if (checkInterval == undefined) {
        checkInterval = 60000 //default to 1 minute.
    }

    setInterval(function () {
    var spans = document.getElementsByTagName('span')
        for (var i = 0; i < spans.length; i++) {
            if (spans[i].innerText == 'Check mail now') {
                //alert(spans[i].id)
                spans[i].click()
                console.log("[OKAY] Auto Mail Checker ~ Checking for new mail.")
            }
        }
    },
    checkInterval
    )
}


auto_mail_checker()

