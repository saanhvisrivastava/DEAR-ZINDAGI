class Form {
    constructor(){
        this.heading = createElement("h1", "Dear Zindagi");
 this.question1 = createElement("h2", "1) Add the names of 5 contacts of your family");
         this.button2 = createButton("NEXT");
         this.input = createInput("Name");
         this.input2=createInput("Number");
         this.input3=createInput("");
         this.input4=createInput("");
         this.input5=createInput("");
         this.input6=createInput("");
         this.input7=createInput("");
         this.input8=createInput("");
         this.input9=createInput("");
         this.input10=createInput("");
        
    }

    display(){
        this.heading.position(500,10);
        this.question1.position(30,30);
      this.button2.position(600,250);
      this.input.position(50,100);
      this.input2.position(250,100);
      this.input3.position(50,150);
      this.input4.position(250,150);
      this.input5.position(50,200);
      this.input6.position(250,200);
      this.input7.position(50,250);
      this.input8.position(250,250);
      this.input9.position(50,300);
      this.input10.position(250,300);

      this.button2.mousePressed(()=>{
        peopleCount+=1;
        person.updateCount(peopleCount);
         person.updateAnswer1();
        this.question1.hide();
        this.button2.hide();
        this.input.hide();
        this.input2.hide();
        this.input3.hide();
        this.input4.hide();
        this.input5.hide();
        this.input6.hide();
        this.input7.hide();
        this.input8.hide();
        this.input9.hide();
        this.input10.hide();
        this.question2=createElement("h2","1)Allow DEAR ZINDAGI to access your whatsapp");
         this.button3=createButton("YES");
         this.button4=createButton("NO");
         this.question2.position(200,50);
         this.button3.position(200,100);
         this.button4.position(250,100);
         this.question3=createElement("h2","2)Allow DEAR ZINDAGI to access your calls and video calls");
         this.button5=createButton("YES");
         this.button6=createButton("NO");
         this.question3.position(200,150);
         this.button5.position(200,200);
         this.button6.position(250,200);
         this.question4=createElement("h2","3)Allow DEAR ZINDAGI to access your social media");
         this.question4.position(200,300);
         this.button7=createButton("YES");
         this.button8=createButton("NO");
         this.button7.position(200,350);
         this.button8.position(250,350);

         this.button9=createButton("NEXT");
         this.button9.position(500,400);

         

         this.button9.mousePressed(()=>{
            this.question2.hide();
            this.question3.hide();
            this.question4.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.button9.hide();
            //question5=createElement("h2","4)You are special,write your thoughts and qualitites in this diary");
            //this.question5.position(300,200);
            this.input11=createInput("Write your qualitites and the names of the people for whom you matter");
            this.input11.position(200,200);
         })
  
  

  
      })
     


      


    }
}

        

             
             



         
        
        
        

        
      
  
