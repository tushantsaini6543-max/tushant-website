const loginForm =
document.getElementById("loginForm");


loginForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const email =
        document.getElementById(
            "loginEmail"
        ).value.trim();


        const password =
        document.getElementById(
            "loginPassword"
        ).value;


        const message =
        document.getElementById(
            "loginMessage"
        );


        const savedUser =
        JSON.parse(
            localStorage.getItem(
                "tushantUser"
            )
        );


        if (!savedUser) {

            message.textContent =
            "❌ Account not found. Please create an account first.";

            return;

        }


        if (
            email === savedUser.email &&
            password === savedUser.password
        ) {

            localStorage.setItem(
                "tushantLoggedIn",
                "true"
            );


            localStorage.setItem(
                "tushantName",
                savedUser.name
            );


            message.textContent =
            "✅ Login successful!";


            setTimeout(
                function() {

                    window.location.href =
                    "courses.html";

                },
                800
            );


        } else {

            message.textContent =
            "❌ Incorrect email or password.";

        }

    }
);
