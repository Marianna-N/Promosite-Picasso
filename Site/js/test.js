var questions = [
    {
        type: "choose",
        question: "<h2>Кто нарисовал эту картину?</h2><br><img id='test_image_1' src='images/pictures/Afremov_Leonid_Elfeeva_basnya.jpg'>",
        answers: [
            "Мария Орлова",
            "Ричард Макнейл",
            "Леонид Афремов"
        ],
        correct: [1]
    },
    {
        type: "choose",
        question: "<h2>А кто нарисовал эту картину?</h2><br><img id='test_image_2' src='images/pictures/Nikki_Boem_Pribrjni_restoran.jpg'>",
        answers: [
            "Сьюзан Риос",
            "Ники Боэм",
            "Мария Орлова"
        ],
        correct: [3]
    },
    {
        type: "choose",
        question: "<h2>А как Вы думаете, чья эта картина?</h2><br><img id='test_image_3' src='images/pictures/Van_Gog_Nochnaya_terrassa.jpg'>",
        answers: [
            "Ван Гог",
            "Мария Орлова",
            "Леонид Афремов"
        ],
        correct: [2]
    }
];

$("document").ready(function(){
    $("#jQuizler").jQuizler(questions);
});