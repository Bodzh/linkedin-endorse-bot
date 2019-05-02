scrollPageToBottom().then(function () {
    scrollPageToMiddle().then(function () {
        $('.pv-skills-section__additional-skills').click();

        setTimeout(function(){
            var endorses = $('.pv-skill-entity__featured-endorse-button-shared[aria-pressed="false"]');

            console.log('endorses available', endorses.length);

            for (var i=0; i<endorses.length; i++) {
                endorses[i].click();

                clickVeryGood().then(function () {
                    clickSubmit();
                })
            }

            console.log('all done');
        },1500);
    })
});

function clickVeryGood() {
    return new Promise(function(resolve) {
        var verugoodbtn = $('#endorsement-followup-proficiency-1-Performance');

        verugoodbtn.click();

        setTimeout(function () {
            resolve(true);
        },1500)
    });
}

function clickSubmit () {
    return new Promise(function(resolve) {
        var submitBtn = $('.pv-endorsement-followup__footer > button');

        submitBtn.click();

        setTimeout(function () {
            resolve(true);
        },1500)
    })
}

function scrollPageToMiddle () {
    return new Promise(function (resolve) {
        let thirdOfHeight = Math.floor(document.body.clientHeight/3);

        scroll(0, thirdOfHeight);

        setTimeout(function () {
            resolve(true);
        },1500)
    });
}

function scrollPageToBottom () {
    return new Promise(function (resolve) {
        scroll(0, document.body.clientHeight);

        setTimeout(function () {
            resolve(true);
        },1500)
    });
}