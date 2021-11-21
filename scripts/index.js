document.getElementById("div_1").addEventListener("click", e => checkPosition(e));
document.getElementById("div_2").addEventListener("click", e => checkPosition(e));
document.getElementById("div_3").addEventListener("click", e => checkPosition(e));
var frames = document.getElementsByClassName("frame");

var pages = [
    [
        "<div class=\"rotate_div\" style=\"display: flex; align-items: center; justify-content: center; transform: rotateY(180deg)\">" +
        "   <h2>Welcome</h2>" +
        "</div>",

        "<div class=\"rotate_div\" style=\"display: flex; justify-content: center; align-items: center; flex-direction: column\">" +
        "    <h1 style=\"margin-top: 5vh\">Welcome</h1>" +
        "    <img id=\"profile_img\" src=\"images/zdjecie_bg.png\" alt=\"Profile picture\"></img>" +
        "    <h1>I'm<br/>Łukasz</h1>" +
        "</div>"
    ],

    [
        "<div class=\"rotate_div\" style=\"display: flex; align-items: center; justify-content: center; transform: rotateY(180deg)\">" +
        "    <h2>About<br/>me</h2>" +
        "</div>",

        "<div class=\"rotate_div\" style=\"display: flex; justify-content: center; align-items: center; flex-direction: column\">" +
        "    <h1>About me</h1>" +
        "    <p id=\"aboutme\"><q style=\"color: bisque\">" +
        "        I am a student of Automation and Robotics at AGH University of Science and Technology in Cracow. " +
        "        This is where I started my adventure with programming. Where during classes we wrote, short " +
        "        scripts and various algorithms.<br/><br/>" +
        "        I am characterised by being an inquisitive person, both during learning and in everyday life. " +
        "        I fully enjoy using mechanisms (e.g. patterns, devices) when I have a well understanding of how" +
        "        they work.<br/><br/>" +
        "        In my free time, I like to cook (although I don't always get it right), go for walks with friends " +
        "        and, above all, spend time playing with my daughter." +
        "    </q></p>" +
        "</div>"
    ],
    [
        "<div class=\"rotate_div\" style=\"display: flex; align-items: center; justify-content: center; transform: rotateY(180deg)\">" +
        "    <h2>Skills</h2>" +
        "</div>",

        "<div class=\"rotate_div\" style=\"display: flex; justify-content: center; align-items: center; flex-direction: column\">" +
        "    <h1>Skills</h1>" +
        "    <ul style=\"width: 80%; margin-left: auto; margin-right: auto; margin-top: 10px\">" +
        "        <li>" +
        "            <div style=\"display: flex\">" +
        "                <p class=\"skill\">Python</p>" +
        "                <p class=\"level\">🟩🟩🟩🟩⬛</p>" +
        "            </div>" +
        "        </li>" +
        "        <li>" +
        "            <div style=\"display: flex\">" +
        "                <p class=\"skill\">GIT</p>" +
        "                <p class=\"level\">🟩🟩🟩⬛⬛</p>" +
        "            </div>" +
        "        </li>" +
        "        <li>" +
        "            <div style=\"display: flex\">" +
        "                <p class=\"skill\">Mercurial</p>" +
        "                <p class=\"level\">🟩🟩🟩⬛⬛</p>" +
        "            </div>" +
        "        </li>" +
        "        <li>" +
        "            <div style=\"display: flex\">" +
        "                <p class=\"skill\">SQL</p>" +
        "                <p class=\"level\">🟩🟩🟩⬛⬛</p>" +
        "            </div>" +
        "        </li>" +
        "        <li>" +
        "            <div style=\"display: flex\">" +
        "                <p class=\"skill\">HTML5</p>" +
        "                <p class=\"level\">🟩🟩🟩⬛⬛</p>" +
        "            </div>" +
        "        </li>" +
        "        <li>" +
        "            <div style=\"display: flex\">" +
        "                <p class=\"skill\">CSS3</p>" +
        "                <p class=\"level\">🟩🟩🟩⬛⬛</p>" +
        "            </div>" +
        "        </li>" +
        "        <li>" +
        "            <div style=\"display: flex\">" +
        "                <p class=\"skill\">JavaScript</p>" +
        "                <p class=\"level\">🟩🟩⬛⬛⬛</p>" +
        "            </div>" +
        "        </li>" +
        "        <li>" +
        "            <div style=\"display: flex\">" +
        "                <p class=\"skill\">C++</p>" +
        "                <p class=\"level\">🟩🟩⬛⬛⬛</p>" +
        "            </div>" +
        "        </li>" +
        "        <li>" +
        "            <div style=\"display: flex\">" +
        "                <p class=\"skill\">C</p>" +
        "                <p class=\"level\">🟩⬛⬛⬛⬛</p>" +
        "            </div>" +
        "        </li>" +
        "    </ul>" +
        "</div>"
    ],
    [
        "<div class=\"rotate_div\" style=\"display: flex; align-items: center; justify-content: center; transform: rotateY(180deg)\">" +
        "    <h2>Courses</h2>" +
        "</div>",

        "<div class=\"rotate_div\" style=\"display: flex; justify-content: center; align-items: center; flex-direction: column\">" +
        "<h1>Courses</h1>" +
        "<ul style=\"width: 80%; margin-left: auto; margin-right: auto; margin-top: 0\">" +
        "    <li class=\"course\">AI For Everyone</li>" +
        "    <li class=\"course\">Introduction to TensorFlow for Artificial Intelligence, Machine Learning and Deep Learning</li>" +
        "    <li class=\"course\">Python Programmer Track</li>" +
        "    <li class=\"course\">E.19 Design and programming of mechatronic devices</li>" +
        "    <li class=\"course\">E.18 Operation of mechatronic equipment and systems</li>" +
        "    <li class=\"course\">E.3 Assembly of mechatronic devices and systems</li>" +
        "</ul>" +
        "</div>"
    ],
    [
        "<div class=\"rotate_div\" style=\"display: flex; align-items: center; justify-content: center; transform: rotateY(180deg)\">" +
        "    <h2>Projects</h2>" +
        "</div>",

        "<div class=\"rotate_div\" style=\"display: flex; justify-content: center; align-items: center; flex-direction: column\">" +
        "    <h1>Projects</h1>" +
        "    <ul style=\"width: 80%; margin-left: auto; margin-right: auto;\">" +
        "        <li class=\"project\">" +
        "            <b><q style=\"color: bisque\">WorkTimer</q></b> (employee management application using Python and Pyqt5 - currently under development)</li>" +
        "        <li class=\"project\">" +
        "            <b><q  style=\"color: bisque\">Guess Digit</q></b> (my first application using HTML, CSS, JavaScript)</li>" +
        "        <li class=\"project\" style=\"color: bisque\">More in private repositories </li>" +
        "    </ul>" +
        "</div>"
    ],
    [
        "<div class=\"rotate_div\" style=\"display: flex; align-items: center; justify-content: center; transform: rotateY(180deg)\">" +
        "    <h2>WorkTimer</h2>" +
        "</div>",

        "<div class=\"rotate_div\" style=\"display: flex; justify-content: center; align-items: center; flex-direction: column\">" +
        "    <h1>WorkTimer</h1>" +
        "    <img id=\"WTimg\" src=\"images/WorkTimer.jpg\" alt=\"WorkTimer image\"></img>" +
        "    <p class=\"tx\" style=\"text-align:center\">A detailed description of the <br/>application can be found in the <a href=\"https://github.com/LukaszRams/WorkTimer\" target=\"_blank\">link</a></p>" +
        "</div>"
    ],
    [
        "<div class=\"rotate_div\" style=\"display: flex; align-items: center; justify-content: center; transform: rotateY(180deg)\">" +
        "    <h2>Guess<br/>Digit</h2>" +
        "</div>",

        "<div class=\"rotate_div\" style=\"display: flex; justify-content: center; align-items: center; flex-direction: column\">" +
        "    <h1>Guess Digit</h1>" +
        "    <p class=\"tx\">Click or copy QR code to play</p>" +
        "    <a id=\"GDlink\" href=\"http://lukaszrams.github.io\\game\" target=\"_blank\">" +
        "        <img id=\"GDimg\" src=\"images/GuessDigit.png\" alt=\"Guess Digit QR code\"></img>" +
        "    </a>" +
        "</div>"
    ],
    [
        "<div class=\"rotate_div\" style=\"display: flex; align-items: center; justify-content: center; transform: rotateY(180deg)\">" +
        "    <h2>Contact</h2>" +
        "</div>",

        "<div class=\"rotate_div\" style=\"display: flex; justify-content: center; align-items: center; flex-direction: column\">" +
        "    <h1>Contact</h1>" +
        "    <a class=\"contactLink\" href=\"tel:+48518440873\" style=\"margin-top: min(2vw, 3vh)\">+48 518 440 873</a>" +
        "    <a class=\"contactLink\" href=\"mailto:lukaszrams2@gmail.com\" style=\"text-align:center; margin-bottom: min(2vw, 3vh)\">lukaszrams2@gmail.com</a>" +
        "    <p class=\"tx\">Find me on</p>" +
        "    <a class=\"smlink\" href=\"https://www.facebook.com/Lukaszz.Rams\" target=\"_blank\">" +
        "        <img class=\"smimg\" src=\"icons/f_logo_RGB-Blue_250.png\" alt=\"facebook logo\"></img>" +
        "    </a>" +
        "    <a class=\"smlink\" href=\"https://www.linkedin.com/in/%C5%82ukasz-rams/\" target=\"_blank\">" +
        "        <img class=\"smimg\" src=\"icons/LI-In-Bug.png\" alt=\"linkedin logo\"></img>" +
        "    </a>" +
        "</div>"
    ]
]


var no_pages = pages.length;
var actual_page = 0;

window.onload = initial;

function changePage(framess, direct) {
    actual_page = actual_page + direct;
    var before = actual_page - 1;
    var after = actual_page + 1;
    if (actual_page < 0) {
        actual_page = no_pages - 1;
        before = actual_page - 1;
        after = 0;
    } else if (actual_page == 0) {
        before = no_pages - 1;
    } else if (actual_page == no_pages - 1) {
        after = 0;
    } else if (actual_page > no_pages - 1) {
        actual_page = 0;
        before = no_pages - 1;
        after = 1;
    }

    if (direct == -1) {
        $(".subframe").delay(1000).fadeIn(1000);
        framess[0].lastElementChild.innerHTML = pages[actual_page][1]; //center
        framess[1].lastElementChild.innerHTML = pages[after][0]; //right
        framess[2].lastElementChild.innerHTML = pages[before][0]; //left
    } else {
        $(".subframe").delay(1000).fadeIn(1000);
        framess[2].lastElementChild.innerHTML = pages[actual_page][1]; //center
        framess[0].lastElementChild.innerHTML = pages[after][0]; //right
        framess[1].lastElementChild.innerHTML = pages[before][0]; //left

    }
}


function initial() {
    frames[0].lastElementChild.innerHTML = pages[no_pages - 1][0];
    frames[1].lastElementChild.innerHTML = pages[0][1];
    frames[2].lastElementChild.innerHTML = pages[1][0];
}

function checkPosition(e) {
    var parent = e.target.parentNode
    while (!parent.classList.contains("frame")) {
        parent = parent.parentNode
    }
    if (parent.classList.contains("left")) {
        rightRotate();
    } else if (parent.classList.contains("right")) {
        leftRotate();
    }
}

function rightRotate() {
    var elements = document.getElementsByClassName("frame");
    var sortedElements = sortElements(elements);
    $(".subframe").delay(300).fadeOut(300);
    requestAnimationFrame(() => {
        sortedElements[2].setAttribute("class", ["frame hideRight"]);
    });
    setTimeout(() => {
        requestAnimationFrame(() => {
            sortedElements[2].setAttribute("class", ["frame hideRight"]);
            sortedElements[0].setAttribute("class", ["frame center"]);
            sortedElements[1].setAttribute("class", ["frame right"]);
            setTimeout(() => {
                sortedElements[2].setAttribute("class", ["frame left"]);
            }, 1500)
        });


        var interval = setInterval(checkRotation, 16)

        function checkRotation() {
            var st = window.getComputedStyle(sortedElements[1], null)
            var tr = st.getPropertyValue("-webkit-transform") ||
                st.getPropertyValue("-moz-transform") ||
                st.getPropertyValue("-ms-transform") ||
                st.getPropertyValue("-o-transform") ||
                st.getPropertyValue("transform")
            if (tr.split('(')[1].split(')')[0].split(',')[0] <= 0.02) {
                clearInterval(interval);
                rightFillContent(sortedElements);
            }
        }
    }, 500)
}

function leftRotate() {
    var elements = document.getElementsByClassName("frame");
    var sortedElements = sortElements(elements);
    $(".subframe").delay(300).fadeOut(300);


    requestAnimationFrame(() => {
        sortedElements[0].setAttribute("class", ["frame hideLeft"]);
    });
    setTimeout(() => {
        requestAnimationFrame(() => {
            sortedElements[2].setAttribute("class", ["frame center"]);
            sortedElements[1].setAttribute("class", ["frame left"]);
            setTimeout(() => {
                sortedElements[0].setAttribute("class", ["frame right"]);
            }, 1500)
        });

        var interval = setInterval(checkRotation, 16)

        function checkRotation() {
            var st = window.getComputedStyle(sortedElements[1], null)
            var tr = st.getPropertyValue("-webkit-transform") ||
                st.getPropertyValue("-moz-transform") ||
                st.getPropertyValue("-ms-transform") ||
                st.getPropertyValue("-o-transform") ||
                st.getPropertyValue("transform")
            if (tr.split('(')[1].split(')')[0].split(',')[0] <= 0.02) {
                clearInterval(interval);
                leftFillContent(sortedElements);
            }
        }
    }, 500)
}

function sortElements(elements) {
    var sortedElements = new Array();
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains("left")) {
            sortedElements[0] = elements[i];
        } else if (elements[i].classList.contains("right")) {
            sortedElements[2] = elements[i];
        } else {
            sortedElements[1] = elements[i];
        }
    }
    return sortedElements;
}

function clearContent(elements) {
    for (var i = 0; i < elements.length; i++) {
        var el = elements[i].lastElementChild;
        while (el.lastElementChild) {
            el.removeChild(el.lastElementChild);
        }
    }
}

function rightFillContent(elements) {
    clearContent(elements);
    changePage(elements, -1);

}

function leftFillContent(elements) {
    clearContent(elements);
    changePage(elements, 1);
}