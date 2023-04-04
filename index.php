<!-- this is just the php displayer -->
<?php
    // include "index.html";
?> 

<!DOCTYPE html>
<html>
    <head>
        <title>Log In Page</title>
        <link rel="stylesheet" href="index.css">
        <script src="index.js"></script>
    </head>
    <body>
        <div class="body-wrap">
            <form id="form" action="validate.php" method="post">
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder="John Doe" name="name" id="name">
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" placeholder="johndoe@gmail.com" name="email" id="email">
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" id="password">
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
                <div class="error-wrap" id="error">

                </div>
            </form>
        </div>
    </body>
</html>