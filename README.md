# AT_Form

Technology:
-Front:
    -React
    -Spring(React Library for graphics)
-Back End:
    -Node
    -Redis
    -Json


To do list:
-Create a json file with Question(id,question,options,values)
    looking like
    [
        {
            "id":1,
            "question":"Lorem Ipsum"
            "options":["Lorem Ipsum","Lorem Ipsum","Lorem Ipsum"]
            "values":1,2,3
        }
    ];
-Create a form page
    -Link to see the team's score
    -Form Component
        -Question states(id,question,options,values)
        -Array Score states(id,childScore,adultScore,parentScore)
        -Fetching questions from the Json file:
        -Radio
        -The for goes like:
            Form(i):
                -it will fetch questions from the question list with the same index
                -and check on the score with the same index
        -Display the questions depending on its id
        -Button Component "Next
            -onClick:
                -saves the scores on the right array
                -add 1 to the i for the Form Component
        -Once it is out of index (Out Of question)
            -Go to result Page
            -Calculate score(Sum(Child),Sum(Adult),Sum(Parent))
            -Send score to result
-Create a result Page
    -Link to see "the Team's score"
    -Show the score (Using Spring)
        -pie chart
    -Form Component
        -Input Text
        -Button Component "Save my progress"
            -On click:
                -Save into a table(from database qcm) employe(id,nom,score_child,score_adult,score_parent)
                -Button is no more clickable
    -Button "Go back Home"
        -Go home

-Create a group result Page:
    -Fetch score from database
    -Show the score(using spring)
        -pie chart
        -who is the most xyz of the group
    -Button "Go back home"
        -Go home


