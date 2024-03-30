// Questionnaire.js

class Questionnaire {
    constructor(id, question, parent, adult, child) {
      this.id = id;
      this.question = question;
      this.parent = parent;
      this.adult = adult;
      this.child = child;
    }
  
    static getListQuestionnaire() {
      const listQuestionnaire = new Array(13);
  
      listQuestionnaire[0] = new Questionnaire(
        1,
        "When faced with a challenging situation, what is your instinctive reaction?",
        "I tend to rely on others for guidance and support, seeking comfort and reassurance",
        "I approach the situation independently, drawing on my own experiences and knowledge",
        "I take charge and try to control the situation, making decisions based on my authority and responsibilities"
      );
  
      listQuestionnaire[1] = new Questionnaire(
        2,
        "How do you typically handle conflicts or disagreements in relationships?",
        "I often react emotionally, seeking validation and empathy from other.",
        "I approach conflicts logically, trying to understand the underlying issues and find practical solutions",
        "I assert my authority and impose my views, expecting compliance from others"
      );
  
      return listQuestionnaire;
    }
  }
  
  export default Questionnaire;
  