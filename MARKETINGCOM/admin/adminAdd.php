<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="adminAdd.css">
    <link rel="stylesheet" href="../frontend/style/navBar.css">
    <title>Document</title>
</head>

<body>
    <!-- navBar element -->
    <div id="allNavBar"></div>
    <!-- navBar element -->
    <div class="mainPage">
        <header>
            <h1>LOGO</h1>
            <i class="fa fa-bars" id="iconNavBar" aria-hidden="true"></i>
        </header>
        <div class="content">
            <h1 class="title">Add Service</h1>
            <form class="form" method="POST">
                <label class="img_select" for="service_img">
                    <div class="label_text">Select a service image</div>
                </label>
                <input type="file" name="service_img" id="service_img" class="service_img">
                <input class="input" type="text" name="service_name" id="service_name" placeholder="Service name">
                <input class="input" type="submit" name="submit" id="submit" value="Add">
                <div class="input" class="cancel" id="cancel">Cancel</div>
                <p id="error"></p>
            </form>
        </div>
    </div>
    <!-- navBar js -->
    <script src="adminNav.js"></script>
</body>

</html>