function yourAnswer() {
    let familyRelationships = 0;    // Отношения в семье
    let aggressiveness  = 0;        // Агрессивность 
    let vistrust = 0;               // Недоверие к людям
    let uncertainty = 0;            // Неуверенность в себе
    // Акцентуация характера(Есть четыре вида)
    let hyperthymic = 0;            // Гипертимная
    let hysteroid = 0;              // Истероидная
    let schizoid = 0;               // Шизоидная
    let emotionallyLabile = 0;      // Эмоционально-лабильная

    let summaryResult = 'Твой результат: \r\n';

    let questionCount = 74;
    
    //Question 1 (vistrusts)
    let radio1;
    let radio11;
    let question1Visibility = document.getElementById('question1');
    let answer1Visibility = document.getElementById('answer1');
    radio1=document.getElementById('customRadioInline2');
    radio11=document.getElementById('customRadioInline1');
    if (radio1.checked) {
        vistrust++;        
    }
    if (radio1.checked || radio11.checked) {
        questionCount--;
        question1Visibility.style.display = 'none'; //Невидимость вопроса
        answer1Visibility.style.display = 'none';   //Невидимость ответа
    }

    //Question 2 (vistrust)
    let radio2;
    let radio22;
    let question2Visibility = document.getElementById('question2');
    let answer2Visibility = document.getElementById('answer2');
    radio2=document.getElementById('customRadioInline3');
    radio22=document.getElementById('customRadioInline4');
    if (radio2.checked) {
        vistrust++;
        
    }
    if (radio2.checked || radio22.checked) {
        questionCount--;
        question2Visibility.style.display = 'none'; 
        answer2Visibility.style.display = 'none';
    }

    //Question 3 (vistrust)
    let radio3;
    let radio33;
    let question3Visibility = document.getElementById('question3');
    let answer3Visibility = document.getElementById('answer3');
    radio3=document.getElementById('customRadioInline6');
    radio33=document.getElementById('customRadioInline5');
    if (radio3.checked) {
        vistrust++;
    }
    if (radio3.checked || radio33.checked) {
        questionCount--;
        question3Visibility.style.display = 'none'; 
        answer3Visibility.style.display = 'none';
    }
    
    //Question 4 (vistrust)
    let radio4;
    let radio44;
    let question4Visibility = document.getElementById('question4');
    let answer4Visibility = document.getElementById('answer4');
    radio4=document.getElementById('customRadioInline7');
    radio44=document.getElementById('customRadioInline8');
    if (radio4.checked) {
        vistrust++;
    }
    if (radio4.checked || radio44.checked){
        questionCount--;
        question4Visibility.style.display = 'none'; 
        answer4Visibility.style.display = 'none';
    }

    //Question 5 (familyRelationships)
    let radio5;
    let radio55;
    let question5Visibility = document.getElementById('question5');
    let answer5Visibility = document.getElementById('answer5');
    radio5=document.getElementById('customRadioInline9');
    radio55=document.getElementById('customRadioInline10');
    if (radio5.checked) {
        familyRelationships++;        
    }
    if (radio5.checked || radio55.checked) {
        questionCount--;
        question5Visibility.style.display = 'none'; 
        answer5Visibility.style.display = 'none';
    }

    //Question 6 (familyRelationships)
    let radio6;
    let radio66;
    let question6Visibility = document.getElementById('question6');
    let answer6Visibility = document.getElementById('answer6');
    radio6=document.getElementById('customRadioInline11');
    radio66=document.getElementById('customRadioInline12');
    if (radio6.checked) {
        familyRelationships++;        
    }
    if (radio6.checked || radio66.checked) {
        questionCount--;
        question6Visibility.style.display = 'none'; 
        answer6Visibility.style.display = 'none';
    }

    //Question 7 (uncertainty)
    let radio7;
    let radio77;
    let question7Visibility = document.getElementById('question7');
    let answer7Visibility = document.getElementById('answer7');
    radio7=document.getElementById('customRadioInline13');
    radio77=document.getElementById('customRadioInline14');
    if (radio7.checked) {
        uncertainty++;        
    }
    if (radio7.checked || radio77.checked) {
        questionCount--;
        question7Visibility.style.display = 'none'; 
        answer7Visibility.style.display = 'none';
    }

    //Question 8 (uncertainty)
    let radio8;
    let radio88;
    let question8Visibility = document.getElementById('question8');
    let answer8Visibility = document.getElementById('answer8');
    radio8=document.getElementById('customRadioInline15');
    radio88=document.getElementById('customRadioInline16');
    if (radio8.checked) {
        uncertainty++;        
    }
    if (radio8.checked || radio88.checked) {
        questionCount--;
        question8Visibility.style.display = 'none'; 
        answer8Visibility.style.display = 'none';
    }

    //Question 9 (hysteroid)
    let radio9;
    let radio99;
    let question9Visibility = document.getElementById('question9');
    let answer9Visibility = document.getElementById('answer9');
    radio9=document.getElementById('customRadioInline17');
    radio99=document.getElementById('customRadioInline18');
    if (radio9.checked) {
        hysteroid++;        
    }
    if (radio9.checked || radio99.checked) {
        questionCount--;
        question9Visibility.style.display = 'none'; 
        answer9Visibility.style.display = 'none';
    }

    //Question 10 (hysteroid)
    let radio10;
    let radio100;
    let question10Visibility = document.getElementById('question10');
    let answer10Visibility = document.getElementById('answer10');
    radio10=document.getElementById('customRadioInline19');
    radio100=document.getElementById('customRadioInline20');
    if (radio10.checked) {
        hysteroid++;        
    }
    if (radio10.checked || radio100.checked) {
        questionCount--;
        question10Visibility.style.display = 'none'; 
        answer10Visibility.style.display = 'none';
    }

    //Question 11 (emotionallyLabile)
    let radio11_1;
    let radio11_2;
    let question11Visibility = document.getElementById('question11');
    let answer11Visibility = document.getElementById('answer11');
    radio11_1=document.getElementById('customRadioInline21');
    radio11_2=document.getElementById('customRadioInline22');
    if (radio11_1.checked) {
        emotionallyLabile++;        
    }
    if (radio11_1.checked || radio11_2.checked) {
        questionCount--;
        question11Visibility.style.display = 'none'; 
        answer11Visibility.style.display = 'none';
    }

    //Question 12 (emotionallyLabile)
    let radio12_1;
    let radio12_2;
    let question12Visibility = document.getElementById('question12');
    let answer12Visibility = document.getElementById('answer12');
    radio12_1=document.getElementById('customRadioInline23');
    radio12_2=document.getElementById('customRadioInline24');
    if (radio12_1.checked) {
        emotionallyLabile++;        
    }
    if (radio12_1.checked || radio12_2.checked) {
        questionCount--;
        question12Visibility.style.display = 'none'; 
        answer12Visibility.style.display = 'none';
    }

    //Question 13 (aggressiveness)
    let radio13_1;
    let radio13_2;
    let question13Visibility = document.getElementById('question13');
    let answer13Visibility = document.getElementById('answer13');
    radio13_1=document.getElementById('customRadioInline25');
    radio13_2=document.getElementById('customRadioInline26');
    if (radio13_1.checked) {
        aggressiveness++;        
    }
    if (radio13_1.checked || radio13_2.checked) {
        questionCount--;
        question13Visibility.style.display = 'none'; 
        answer13Visibility.style.display = 'none';
    }

    //Question 14 (aggressiveness)
    let radio14_1;
    let radio14_2;
    let question14Visibility = document.getElementById('question14');
    let answer14Visibility = document.getElementById('answer14');
    radio14_1=document.getElementById('customRadioInline27');
    radio14_2=document.getElementById('customRadioInline28');
    if (radio14_1.checked) {
        aggressiveness++;        
    }
    if (radio14_1.checked || radio14_2.checked) {
        questionCount--;
        question14Visibility.style.display = 'none'; 
        answer14Visibility.style.display = 'none';
    }

    //Question 15 (vistrust)
    let radio15_1;
    let radio15_2;
    let question15Visibility = document.getElementById('question15');
    let answer15Visibility = document.getElementById('answer15');
    radio15_1=document.getElementById('customRadioInline29');
    radio15_2=document.getElementById('customRadioInline30');
    if (radio15_1.checked) {
        vistrust++;        
    }
    if (radio15_1.checked || radio15_2.checked) {
        questionCount--;
        question15Visibility.style.display = 'none'; 
        answer15Visibility.style.display = 'none';
    }

    //Question 16 (vistrust)
    let radio16_1;
    let radio16_2;
    let question16Visibility = document.getElementById('question16');
    let answer16Visibility = document.getElementById('answer16');
    radio16_1=document.getElementById('customRadioInline31');
    radio16_2=document.getElementById('customRadioInline32');
    if (radio16_1.checked) {
        vistrust++;        
    }
    if (radio16_1.checked || radio16_2.checked) {
        questionCount--;
        question16Visibility.style.display = 'none'; 
        answer16Visibility.style.display = 'none';
    }

    //Question 17 (vistrust)
    let radio17_1;
    let radio17_2;
    let question17Visibility = document.getElementById('question17');
    let answer17Visibility = document.getElementById('answer17');
    radio17_1=document.getElementById('customRadioInline33');
    radio17_2=document.getElementById('customRadioInline34');
    if (radio17_2.checked) {
        vistrust++;        
    }
    if (radio17_1.checked || radio17_2.checked) {
        questionCount--;
        question17Visibility.style.display = 'none'; 
        answer17Visibility.style.display = 'none';
    }

    //Question 18 (vistrust)
    let radio18_1;
    let radio18_2;
    let question18Visibility = document.getElementById('question18');
    let answer18Visibility = document.getElementById('answer18');
    radio18_1=document.getElementById('customRadioInline35');
    radio18_2=document.getElementById('customRadioInline36');
    if (radio18_1.checked) {
        vistrust++;        
    }
    if (radio18_1.checked || radio18_2.checked) {
        questionCount--;
        question18Visibility.style.display = 'none'; 
        answer18Visibility.style.display = 'none';
    }

     //Question 19 (aggressiveness)
     let radio19_1;
     let radio19_2;
     let question19Visibility = document.getElementById('question19');
     let answer19Visibility = document.getElementById('answer19');
     radio19_1=document.getElementById('customRadioInline37');
     radio19_2=document.getElementById('customRadioInline38');
     if (radio19_1.checked) {
         aggressiveness++;        
     }
     if (radio19_1.checked || radio19_2.checked) {
         questionCount--;
         question19Visibility.style.display = 'none'; 
         answer19Visibility.style.display = 'none';
     }

    //Question 20 (aggressiveness)
    let radio20_1;
    let radio20_2;
    let question20Visibility = document.getElementById('question20');
    let answer20Visibility = document.getElementById('answer20');
    radio20_1=document.getElementById('customRadioInline39');
    radio20_2=document.getElementById('customRadioInline40');
    if (radio20_1.checked) {
        aggressiveness++;        
    }
    if (radio20_1.checked || radio20_2.checked) {
        questionCount--;
        question20Visibility.style.display = 'none'; 
        answer20Visibility.style.display = 'none';
    }

     //Question 21 (familyRelationships)
    let radio21_1;
    let radio21_2;
    let question21Visibility = document.getElementById('question21');
    let answer21Visibility = document.getElementById('answer21');
    radio21_1=document.getElementById('customRadioInline41');
    radio21_2=document.getElementById('customRadioInline42');
    if (radio21_1.checked) {
       familyRelationships++;        
    }
    if (radio21_1.checked || radio21_2.checked) {
        questionCount--;
        question21Visibility.style.display = 'none'; 
        answer21Visibility.style.display = 'none';
    }

    //Question 22 (familyRelationships)
    let radio22_1;
    let radio22_2;
    let question22Visibility = document.getElementById('question22');
    let answer22Visibility = document.getElementById('answer22');
    radio22_1=document.getElementById('customRadioInline43');
    radio22_2=document.getElementById('customRadioInline44');
    if (radio22_2.checked) {
        familyRelationships++;        
    }
    if (radio22_1.checked || radio22_2.checked) {
        questionCount--;
        question22Visibility.style.display = 'none'; 
        answer22Visibility.style.display = 'none';
    }

    //Question 23 (uncertainty)
    let radio23_1;
    let radio23_2;
    let question23Visibility = document.getElementById('question23');
    let answer23Visibility = document.getElementById('answer23');
    radio23_1=document.getElementById('customRadioInline45');
    radio23_2=document.getElementById('customRadioInline46');
    if (radio23_2.checked) {
        uncertainty++;        
    }
    if (radio23_1.checked || radio23_2.checked) {
        questionCount--;
        question23Visibility.style.display = 'none'; 
        answer23Visibility.style.display = 'none';
    }

    //Question 24 (uncertainty)
    let radio24_1;
    let radio24_2;
    let question24Visibility = document.getElementById('question24');
    let answer24Visibility = document.getElementById('answer24');
    radio24_1=document.getElementById('customRadioInline47');
    radio24_2=document.getElementById('customRadioInline48');
    if (radio24_1.checked) {
        uncertainty++;        
    }
    if (radio24_1.checked || radio24_2.checked) {
        questionCount--;
        question24Visibility.style.display = 'none'; 
        answer24Visibility.style.display = 'none';
    }

    //Question 25 (familyRelationships)
    let radio25_1;
    let radio25_2;
    let question25Visibility = document.getElementById('question25');
    let answer25Visibility = document.getElementById('answer25');
    radio25_1=document.getElementById('customRadioInline49');
    radio25_2=document.getElementById('customRadioInline50');
    if (radio25_1.checked) {
        familyRelationships++;        
    }
    if (radio25_1.checked || radio25_2.checked) {
        questionCount--;
        question25Visibility.style.display = 'none'; 
        answer25Visibility.style.display = 'none';
    }

    //Question 26 (schizoid)
    let radio26_1;
    let radio26_2;
    let question26Visibility = document.getElementById('question26');
    let answer26Visibility = document.getElementById('answer26');
    radio26_1=document.getElementById('customRadioInline51');
    radio26_2=document.getElementById('customRadioInline52');
    if (radio26_1.checked) {
        schizoid++;        
    }
    if (radio26_1.checked || radio26_2.checked) {
        questionCount--;
        question26Visibility.style.display = 'none'; 
        answer26Visibility.style.display = 'none';
    }

    //Question 27 (schizoid)
    let radio27_1;
    let radio27_2;
    let question27Visibility = document.getElementById('question27');
    let answer27Visibility = document.getElementById('answer27');
    radio27_1=document.getElementById('customRadioInline53');
    radio27_2=document.getElementById('customRadioInline54');
    if (radio27_1.checked) {
        schizoid++;        
    }
    if (radio27_1.checked || radio27_2.checked) {
        questionCount--;
        question27Visibility.style.display = 'none'; 
        answer27Visibility.style.display = 'none';
    }

    //Question 28 (familyRelationships)
    let radio28_1;
    let radio28_2;
    let question28Visibility = document.getElementById('question28');
    let answer28Visibility = document.getElementById('answer28');
    radio28_1=document.getElementById('customRadioInline55');
    radio28_2=document.getElementById('customRadioInline56');
    if (radio28_1.checked) {
        familyRelationships++;        
    }
    if (radio28_1.checked || radio28_2.checked) {
        questionCount--;
        question28Visibility.style.display = 'none'; 
        answer28Visibility.style.display = 'none';
    }

    //Question 29 (familyRelationships)
    let radio29_1;
    let radio29_2;
    let question29Visibility = document.getElementById('question29');
    let answer29Visibility = document.getElementById('answer29');
    radio29_1=document.getElementById('customRadioInline57');
    radio29_2=document.getElementById('customRadioInline58');
    if (radio29_1.checked) {
        familyRelationships++;        
    }
    if (radio29_1.checked || radio29_2.checked) {
        questionCount--;
        question29Visibility.style.display = 'none'; 
        answer29Visibility.style.display = 'none';
    }

    //Question 30 (uncertainty)
    let radio30_1;
    let radio30_2;
    let question30Visibility = document.getElementById('question30');
    let answer30Visibility = document.getElementById('answer30');
    radio30_1=document.getElementById('customRadioInline59');
    radio30_2=document.getElementById('customRadioInline60');
    if (radio30_1.checked) {
        uncertainty++;        
    }
    if (radio30_1.checked || radio30_2.checked) {
        questionCount--;
        question30Visibility.style.display = 'none'; 
        answer30Visibility.style.display = 'none';
    }

    //Question 31 (uncertainty)
    let radio31_1;
    let radio31_2;
    let question31Visibility = document.getElementById('question31');
    let answer31Visibility = document.getElementById('answer31');
    radio31_1=document.getElementById('customRadioInline61');
    radio31_2=document.getElementById('customRadioInline62');
    if (radio31_1.checked) {
        uncertainty++;        
    }
    if (radio31_1.checked || radio31_2.checked) {
        questionCount--;
        question31Visibility.style.display = 'none'; 
        answer31Visibility.style.display = 'none';
    }

    //Question 32 (uncertainty)
    let radio32_1;
    let radio32_2;
    let question32Visibility = document.getElementById('question32');
    let answer32Visibility = document.getElementById('answer32');
    radio32_1=document.getElementById('customRadioInline63');
    radio32_2=document.getElementById('customRadioInline64');
    if (radio32_1.checked) {
        uncertainty++;        
    }
    if (radio32_1.checked || radio32_2.checked) {
        questionCount--;
        question32Visibility.style.display = 'none'; 
        answer32Visibility.style.display = 'none';
    }

    //Question 33 (uncertainty)
    let radio33_1;
    let radio33_2;
    let question33Visibility = document.getElementById('question33');
    let answer33Visibility = document.getElementById('answer33');
    radio33_1=document.getElementById('customRadioInline65');
    radio33_2=document.getElementById('customRadioInline66');
    if (radio33_1.checked) {
        uncertainty++;        
    }
    if (radio33_1.checked || radio33_2.checked) {
        questionCount--;
        question33Visibility.style.display = 'none'; 
        answer33Visibility.style.display = 'none';
    }

    //Question 34 (vistrust)
    let radio34_1;
    let radio34_2;
    let question34Visibility = document.getElementById('question34');
    let answer34Visibility = document.getElementById('answer34');
    radio34_1=document.getElementById('customRadioInline67');
    radio34_2=document.getElementById('customRadioInline68');
    if (radio34_1.checked) {
        vistrust++;        
    }
    if (radio34_1.checked || radio34_2.checked) {
        questionCount--;
        question34Visibility.style.display = 'none'; 
        answer34Visibility.style.display = 'none';
    }

    //Question 35 (aggressiveness)
    let radio35_1;
    let radio35_2;
    let question35Visibility = document.getElementById('question35');
    let answer35Visibility = document.getElementById('answer35');
    radio35_1=document.getElementById('customRadioInline69');
    radio35_2=document.getElementById('customRadioInline70');
    if (radio35_1.checked) {
        aggressiveness++;        
    }
    if (radio35_1.checked || radio35_2.checked) {
        questionCount--;
        question35Visibility.style.display = 'none'; 
        answer35Visibility.style.display = 'none';
    }

    //Question 36 (aggressiveness)
    let radio36_1;
    let radio36_2;
    let question36Visibility = document.getElementById('question36');
    let answer36Visibility = document.getElementById('answer36');
    radio36_1=document.getElementById('customRadioInline71');
    radio36_2=document.getElementById('customRadioInline72');
    if (radio36_1.checked) {
        aggressiveness++;        
    }
    if (radio36_1.checked || radio36_2.checked) {
        questionCount--;
        question36Visibility.style.display = 'none'; 
        answer36Visibility.style.display = 'none';
    }

    //Question 37 (familyRelationships)
    let radio37_1;
    let radio37_2;
    let question37Visibility = document.getElementById('question37');
    let answer37Visibility = document.getElementById('answer37');
    radio37_1=document.getElementById('customRadioInline73');
    radio37_2=document.getElementById('customRadioInline74');
    if (radio37_1.checked) {
        familyRelationships++;        
    }
    if (radio37_1.checked || radio37_2.checked) {
        questionCount--;
        question37Visibility.style.display = 'none'; 
        answer37Visibility.style.display = 'none';
    }

    //Question 38 (familyRelationships)
    let radio38_1;
    let radio38_2;
    let question38Visibility = document.getElementById('question38');
    let answer38Visibility = document.getElementById('answer38');
    radio38_1=document.getElementById('customRadioInline75');
    radio38_2=document.getElementById('customRadioInline76');
    if (radio38_1.checked) {
        familyRelationships++;        
    }
    if (radio38_1.checked || radio38_2.checked) {
        questionCount--;
        question38Visibility.style.display = 'none'; 
        answer38Visibility.style.display = 'none';
    }

    //Question 39 (familyRelationships)
    let radio39_1;
    let radio39_2;
    let question39Visibility = document.getElementById('question39');
    let answer39Visibility = document.getElementById('answer39');
    radio39_1=document.getElementById('customRadioInline77');
    radio39_2=document.getElementById('customRadioInline78');
    if (radio39_1.checked) {
        familyRelationships++;        
    }
    if (radio39_1.checked || radio39_2.checked) {
        questionCount--;
        question39Visibility.style.display = 'none'; 
        answer39Visibility.style.display = 'none';
    }

    //Question 40 (uncertainty)
    let radio40_1;
    let radio40_2;
    let question40Visibility = document.getElementById('question40');
    let answer40Visibility = document.getElementById('answer40');
    radio40_1=document.getElementById('customRadioInline79');
    radio40_2=document.getElementById('customRadioInline80');
    if (radio40_1.checked) {
        uncertainty++;        
    }
    if (radio40_1.checked || radio40_2.checked) {
        questionCount--;
        question40Visibility.style.display = 'none'; 
        answer40Visibility.style.display = 'none';
    }

    //Question 41 (uncertainty)
    let radio41_1;
    let radio41_2;
    let question41Visibility = document.getElementById('question41');
    let answer41Visibility = document.getElementById('answer41');
    radio41_1=document.getElementById('customRadioInline81');
    radio41_2=document.getElementById('customRadioInline82');
    if (radio41_1.checked) {
        uncertainty++;        
    }
    if (radio41_1.checked || radio41_2.checked) {
        questionCount--;
        question41Visibility.style.display = 'none'; 
        answer41Visibility.style.display = 'none';
    }

    //Question 42 (aggressiveness)
    let radio42_1;
    let radio42_2;
    let question42Visibility = document.getElementById('question42');
    let answer42Visibility = document.getElementById('answer42');
    radio42_1=document.getElementById('customRadioInline83');
    radio42_2=document.getElementById('customRadioInline84');
    if (radio42_1.checked) {
        aggressiveness++;        
    }
    if (radio42_1.checked || radio42_2.checked) {
        questionCount--;
        question42Visibility.style.display = 'none'; 
        answer42Visibility.style.display = 'none';
    }

    //Question 43 (vistrust)
    let radio43_1;
    let radio43_2;
    let question43Visibility = document.getElementById('question43');
    let answer43Visibility = document.getElementById('answer43');
    radio43_1=document.getElementById('customRadioInline85');
    radio43_2=document.getElementById('customRadioInline86');
    if (radio43_1.checked) {
        vistrust++;        
    }
    if (radio43_1.checked || radio43_2.checked) {
        questionCount--;
        question43Visibility.style.display = 'none'; 
        answer43Visibility.style.display = 'none';
    }

    //Question 44 (vistrust)
    let radio44_1;
    let radio44_2;
    let question44Visibility = document.getElementById('question44');
    let answer44Visibility = document.getElementById('answer44');
    radio44_1=document.getElementById('customRadioInline87');
    radio44_2=document.getElementById('customRadioInline88');
    if (radio44_1.checked) {
        vistrust++;        
    }
    if (radio44_1.checked || radio44_2.checked) {
        questionCount--;
        question44Visibility.style.display = 'none'; 
        answer44Visibility.style.display = 'none';
    }

    //Question 45 (familyRelationships)
    let radio45_1;
    let radio45_2;
    let question45Visibility = document.getElementById('question45');
    let answer45Visibility = document.getElementById('answer45');
    radio45_1=document.getElementById('customRadioInline89');
    radio45_2=document.getElementById('customRadioInline90');
    if (radio45_1.checked) {
        familyRelationships++;        
    }
    if (radio45_1.checked || radio45_2.checked) {
        questionCount--;
        question45Visibility.style.display = 'none'; 
        answer45Visibility.style.display = 'none';
    }

    //Question 46 (familyRelationships)
    let radio46_1;
    let radio46_2;
    let question46Visibility = document.getElementById('question46');
    let answer46Visibility = document.getElementById('answer46');
    radio46_1=document.getElementById('customRadioInline91');
    radio46_2=document.getElementById('customRadioInline92');
    if (radio46_1.checked) {
        familyRelationships++;        
    }
    if (radio46_1.checked || radio46_2.checked) {
        questionCount--;
        question46Visibility.style.display = 'none'; 
        answer46Visibility.style.display = 'none';
    }

    //Question 47 (uncertainty)
    let radio47_1;
    let radio47_2;
    let question47Visibility = document.getElementById('question47');
    let answer47Visibility = document.getElementById('answer47');
    radio47_1=document.getElementById('customRadioInline93');
    radio47_2=document.getElementById('customRadioInline94');
    if (radio47_1.checked) {
        uncertainty++;        
    }
    if (radio47_1.checked || radio47_2.checked) {
        questionCount--;
        question47Visibility.style.display = 'none'; 
        answer47Visibility.style.display = 'none';
    }

    //Question 48 (hyperthymic)
    let radio48_1;
    let radio48_2;
    let question48Visibility = document.getElementById('question48');
    let answer48Visibility = document.getElementById('answer48');
    radio48_1=document.getElementById('customRadioInline95');
    radio48_2=document.getElementById('customRadioInline96');
    if (radio48_1.checked) {
        hyperthymic++;        
    }
    if (radio48_1.checked || radio48_2.checked) {
        questionCount--;
        question48Visibility.style.display = 'none'; 
        answer48Visibility.style.display = 'none';
    }

    //Question 49 (hyperthymic)
    let radio49_1;
    let radio49_2;
    let question49Visibility = document.getElementById('question49');
    let answer49Visibility = document.getElementById('answer49');
    radio49_1=document.getElementById('customRadioInline97');
    radio49_2=document.getElementById('customRadioInline98');
    if (radio49_1.checked) {
        hyperthymic++;        
    }
    if (radio49_1.checked || radio49_2.checked) {
        questionCount--;
        question49Visibility.style.display = 'none'; 
        answer49Visibility.style.display = 'none';
    }

    //Question 50 (hysteroid)
    let radio50_1;
    let radio50_2;
    let question50Visibility = document.getElementById('question50');
    let answer50Visibility = document.getElementById('answer50');
    radio50_1=document.getElementById('customRadioInline99');
    radio50_2=document.getElementById('customRadioInline100');
    if (radio50_1.checked) {
        hysteroid++;        
    }
    if (radio50_1.checked || radio50_2.checked) {
        questionCount--;
        question50Visibility.style.display = 'none'; 
        answer50Visibility.style.display = 'none';
    }

    //Question 51 (schizoid)
    let radio51_1;
    let radio51_2;
    let question51Visibility = document.getElementById('question51');
    let answer51Visibility = document.getElementById('answer51');
    radio51_1=document.getElementById('customRadioInline101');
    radio51_2=document.getElementById('customRadioInline102');
    if (radio51_1.checked) {
        schizoid++;        
    }
    if (radio51_1.checked || radio51_2.checked) {
        questionCount--;
        question51Visibility.style.display = 'none'; 
        answer51Visibility.style.display = 'none';
    }

    //Question 52 (emotionallyLabile)
    let radio52_1;
    let radio52_2;
    let question52Visibility = document.getElementById('question52');
    let answer52Visibility = document.getElementById('answer52');
    radio52_1=document.getElementById('customRadioInline103');
    radio52_2=document.getElementById('customRadioInline104');
    if (radio52_1.checked) {
        emotionallyLabile++;        
    }
    if (radio52_1.checked || radio52_2.checked) {
        questionCount--;
        question52Visibility.style.display = 'none'; 
        answer52Visibility.style.display = 'none';
    }

    //Question 53 (familyRelationships)
    let radio53_1;
    let radio53_2;
    let question53Visibility = document.getElementById('question53');
    let answer53Visibility = document.getElementById('answer53');
    radio53_1=document.getElementById('customRadioInline105');
    radio53_2=document.getElementById('customRadioInline106');
    if (radio53_1.checked) {
        familyRelationships++;        
    }
    if (radio53_1.checked || radio53_2.checked) {
        questionCount--;
        question53Visibility.style.display = 'none'; 
        answer53Visibility.style.display = 'none';
    }

    //Question 54 (familyRelationships)
    let radio54_1;
    let radio54_2;
    let question54Visibility = document.getElementById('question54');
    let answer54Visibility = document.getElementById('answer54');
    radio54_1=document.getElementById('customRadioInline107');
    radio54_2=document.getElementById('customRadioInline108');
    if (radio54_1.checked) {
        familyRelationships++;        
    }
    if (radio54_1.checked || radio54_2.checked) {
        questionCount--;
        question54Visibility.style.display = 'none'; 
        answer54Visibility.style.display = 'none';
    }

    //Question 55 (uncertainty)
    let radio55_1;
    let radio55_2;
    let question55Visibility = document.getElementById('question55');
    let answer55Visibility = document.getElementById('answer55');
    radio55_1=document.getElementById('customRadioInline109');
    radio55_2=document.getElementById('customRadioInline110');
    if (radio55_1.checked) {
        uncertainty++;        
    }
    if (radio55_1.checked || radio55_2.checked) {
        questionCount--;
        question55Visibility.style.display = 'none'; 
        answer55Visibility.style.display = 'none';
    }

    //Question 56 (uncertainty)
    let radio56_1;
    let radio56_2;
    let question56Visibility = document.getElementById('question56');
    let answer56Visibility = document.getElementById('answer56');
    radio56_1=document.getElementById('customRadioInline111');
    radio56_2=document.getElementById('customRadioInline112');
    if (radio56_1.checked) {
        uncertainty++;        
    }
    if (radio56_1.checked || radio56_2.checked) {
        questionCount--;
        question56Visibility.style.display = 'none'; 
        answer56Visibility.style.display = 'none';
    }

    //Question 57 (aggressiveness)
    let radio57_1;
    let radio57_2;
    let question57Visibility = document.getElementById('question57');
    let answer57Visibility = document.getElementById('answer57');
    radio57_1=document.getElementById('customRadioInline113');
    radio57_2=document.getElementById('customRadioInline114');
    if (radio57_1.checked) {
        aggressiveness++;        
    }
    if (radio57_1.checked || radio57_2.checked) {
        questionCount--;
        question57Visibility.style.display = 'none'; 
        answer57Visibility.style.display = 'none';
    }

    //Question 58 (aggressiveness)
    let radio58_1;
    let radio58_2;
    let question58Visibility = document.getElementById('question58');
    let answer58Visibility = document.getElementById('answer58');
    radio58_1=document.getElementById('customRadioInline115');
    radio58_2=document.getElementById('customRadioInline116');
    if (radio58_1.checked) {
        aggressiveness++;        
    }
    if (radio58_1.checked || radio58_2.checked) {
        questionCount--;
        question58Visibility.style.display = 'none'; 
        answer58Visibility.style.display = 'none';
    }

    //Question 59 (vistrust)
    let radio59_1;
    let radio59_2;
    let question59Visibility = document.getElementById('question59');
    let answer59Visibility = document.getElementById('answer59');
    radio59_1=document.getElementById('customRadioInline117');
    radio59_2=document.getElementById('customRadioInline118');
    if (radio59_2.checked) {
        vistrust++;        
    }
    if (radio59_1.checked || radio59_2.checked) {
        questionCount--;
        question59Visibility.style.display = 'none'; 
        answer59Visibility.style.display = 'none';
    }

    //Question 60 (hyperthymic)
    let radio60_1;
    let radio60_2;
    let question60Visibility = document.getElementById('question60');
    let answer60Visibility = document.getElementById('answer60');
    radio60_1=document.getElementById('customRadioInline119');
    radio60_2=document.getElementById('customRadioInline120');
    if (radio60_2.checked) {
        hyperthymic++;        
    }
    if (radio60_1.checked || radio60_2.checked) {
        questionCount--;
        question60Visibility.style.display = 'none'; 
        answer60Visibility.style.display = 'none';
    }

    //Question 61 (hysteroid)
    let radio61_1;
    let radio61_2;
    let question61Visibility = document.getElementById('question61');
    let answer61Visibility = document.getElementById('answer61');
    radio61_1=document.getElementById('customRadioInline121');
    radio61_2=document.getElementById('customRadioInline122');
    if (radio61_1.checked) {
        hysteroid++;        
    }
    if (radio61_1.checked || radio61_2.checked) {
        questionCount--;
        question61Visibility.style.display = 'none'; 
        answer61Visibility.style.display = 'none';
    }

    //Question 62 (emotionallyLabile)
    let radio62_1;
    let radio62_2;
    let question62Visibility = document.getElementById('question62');
    let answer62Visibility = document.getElementById('answer62');
    radio62_1=document.getElementById('customRadioInline123');
    radio62_2=document.getElementById('customRadioInline124');
    if (radio62_1.checked) {
        emotionallyLabile++;        
    }
    if (radio62_1.checked || radio62_2.checked) {
        questionCount--;
        question62Visibility.style.display = 'none'; 
        answer62Visibility.style.display = 'none';
    }

    //Question 63 (vistrust)
    let radio63_1;
    let radio63_2;
    let question63Visibility = document.getElementById('question63');
    let answer63Visibility = document.getElementById('answer63');
    radio63_1=document.getElementById('customRadioInline125');
    radio63_2=document.getElementById('customRadioInline126');
    if (radio63_1.checked) {
        vistrust++;        
    }
    if (radio63_1.checked || radio63_2.checked) {
        questionCount--;
        question63Visibility.style.display = 'none'; 
        answer63Visibility.style.display = 'none';
    }

    //Question 64 (aggressiveness)
    let radio64_1;
    let radio64_2;
    let question64Visibility = document.getElementById('question64');
    let answer64Visibility = document.getElementById('answer64');
    radio64_1=document.getElementById('customRadioInline127');
    radio64_2=document.getElementById('customRadioInline128');
    if (radio64_1.checked) {
        aggressiveness++;        
    }
    if (radio64_1.checked || radio64_2.checked) {
        questionCount--;
        question64Visibility.style.display = 'none'; 
        answer64Visibility.style.display = 'none';
    }

    //Question 65 (aggressiveness)
    let radio65_1;
    let radio65_2;
    let question65Visibility = document.getElementById('question65');
    let answer65Visibility = document.getElementById('answer65');
    radio65_1=document.getElementById('customRadioInline129');
    radio65_2=document.getElementById('customRadioInline130');
    if (radio65_1.checked) {
        aggressiveness++;        
    }
    if (radio65_1.checked || radio65_2.checked) {
        questionCount--;
        question65Visibility.style.display = 'none'; 
        answer65Visibility.style.display = 'none';
    }

    //Question 66 (familyRelationships)
    let radio66_1;
    let radio66_2;
    let question66Visibility = document.getElementById('question66');
    let answer66Visibility = document.getElementById('answer66');
    radio66_1=document.getElementById('customRadioInline131');
    radio66_2=document.getElementById('customRadioInline132');
    if (radio66_1.checked) {
        familyRelationships++;        
    }
    if (radio66_1.checked || radio66_2.checked) {
        questionCount--;
        question66Visibility.style.display = 'none'; 
        answer66Visibility.style.display = 'none';
    }

    //Question 67 (familyRelationships)
    let radio67_1;
    let radio67_2;
    let question67Visibility = document.getElementById('question67');
    let answer67Visibility = document.getElementById('answer67');
    radio67_1=document.getElementById('customRadioInline133');
    radio67_2=document.getElementById('customRadioInline134');
    if (radio67_1.checked) {
        familyRelationships++;        
    }
    if (radio67_1.checked || radio67_2.checked) {
        questionCount--;
        question67Visibility.style.display = 'none'; 
        answer67Visibility.style.display = 'none';
    }
    
    //Question 68 (uncertainty)
    let radio68_1;
    let radio68_2;
    let question68Visibility = document.getElementById('question68');
    let answer68Visibility = document.getElementById('answer68');
    radio68_1=document.getElementById('customRadioInline135');
    radio68_2=document.getElementById('customRadioInline136');
    if (radio68_1.checked) {
        uncertainty++;        
    }
    if (radio68_1.checked || radio68_2.checked) {
        questionCount--;
        question68Visibility.style.display = 'none'; 
        answer68Visibility.style.display = 'none';
    }

    //Question 69 (uncertainty)
    let radio69_1;
    let radio69_2;
    let question69Visibility = document.getElementById('question69');
    let answer69Visibility = document.getElementById('answer69');
    radio69_1=document.getElementById('customRadioInline137');
    radio69_2=document.getElementById('customRadioInline138');
    if (radio69_1.checked) {
        uncertainty++;        
    }
    if (radio69_1.checked || radio69_2.checked) {
        questionCount--;
        question69Visibility.style.display = 'none'; 
        answer69Visibility.style.display = 'none';
    }

    //Question 70 (schizoid)
    let radio70_1;
    let radio70_2;
    let question70Visibility = document.getElementById('question70');
    let answer70Visibility = document.getElementById('answer70');
    radio70_1=document.getElementById('customRadioInline139');
    radio70_2=document.getElementById('customRadioInline140');
    if (radio70_1.checked) {
        schizoid++;        
    }
    if (radio70_1.checked || radio70_2.checked) {
        questionCount--;
        question70Visibility.style.display = 'none'; 
        answer70Visibility.style.display = 'none';
    }

    //Question 71 (familyRelationships)
    let radio71_1;
    let radio71_2;
    let question71Visibility = document.getElementById('question71');
    let answer71Visibility = document.getElementById('answer71');
    radio71_1=document.getElementById('customRadioInline141');
    radio71_2=document.getElementById('customRadioInline142');
    if (radio71_1.checked) {
        familyRelationships++;        
    }
    if (radio71_1.checked || radio71_2.checked) {
        questionCount--;
        question71Visibility.style.display = 'none'; 
        answer71Visibility.style.display = 'none';
    }

    //Question 72 (vistrust)
    let radio72_1;
    let radio72_2;
    let question72Visibility = document.getElementById('question72');
    let answer72Visibility = document.getElementById('answer72');
    radio72_1=document.getElementById('customRadioInline143');
    radio72_2=document.getElementById('customRadioInline144');
    if (radio72_1.checked) {
        vistrust++;        
    }
    if (radio72_1.checked || radio72_2.checked) {
        questionCount--;
        question72Visibility.style.display = 'none'; 
        answer72Visibility.style.display = 'none';
    }

    //Question 73 (uncertainty)
    let radio73_1;
    let radio73_2;
    let question73Visibility = document.getElementById('question73');
    let answer73Visibility = document.getElementById('answer73');
    radio73_1=document.getElementById('customRadioInline145');
    radio73_2=document.getElementById('customRadioInline146');
    if (radio73_1.checked) {
        uncertainty++;        
    }
    if (radio73_1.checked || radio73_2.checked) {
        questionCount--;
        question73Visibility.style.display = 'none'; 
        answer73Visibility.style.display = 'none';
    }

    //Question 74 (hyperthymic)
    let radio74_1;
    let radio74_2;
    let question74Visibility = document.getElementById('question74');
    let answer74Visibility = document.getElementById('answer74');
    radio74_1=document.getElementById('customRadioInline147');
    radio74_2=document.getElementById('customRadioInline148');
    if (radio74_1.checked) {
        hyperthymic++;        
    }
    if (radio74_1.checked || radio74_2.checked) {
        questionCount--;
        question74Visibility.style.display = 'none'; 
        answer74Visibility.style.display = 'none';
    }

    //Варианты результатов
    let familyRelationships1 = 'Отношения в семье: Здоровая семейная обстановка.\r\n'; 
    let familyRelationships2 = 'Отношения в семье: Ты попал в группу риска, это свидетельствует о нарушении внутрисемейных отношений, которое может быть обусловлено: напряженной ситуацией в семье, неприязнью, ограничениями и требованиям идисциплины без чувства родительской любви, страхом перед родителями и т.д. Когда напряжение, вызванное неудовлетворенностью отношениями в семье продолжается слишком долго, оно начинает оказывать сильное разрушающее воздействие на здоровье детей и подростков. \r\n';
    let aggressiveness1 = 'Агрессивность: У тебя нет повышенной агрессивности.\r\n';
    let aggressiveness2 = 'Агрессивность: Ты попал в группу риска, это свидетельствует о повышенной враждебности, задиристости, грубости. Агрессия может выражаться и в скрытых формах - недоброжелательности и озлобленности. Повышенная агрессивность часто сопровождается повышенной склонностью к риску и является неотъемлимой чертой характера детей и подростков группы риска. \r\n';
    let vistrust1 = 'Недоверие к людям: Ты доверяешь окружающим тебя людям. \r\n';
    let vistrust2 = 'Недоверие к людям: Ты попал в группу риска, это свидетельствует о сильновыраженном недоверии к окружающим людям, подозрительности, враждебности. Такие дети и подростки часто бывают пассивными и застенчивыми в общении со сверстниками из-за боязни быть отвергнутыми. Обычно это сопровождается коммуникативной некомпетентностью, неумением устанавливать дружеские взаимоотношения с другими людьми. \r\n';
    let uncertainty1 = 'Неуверенность в себе: Ты уверенный в себе человек. \r\n';
    let uncertainty2 = 'Неуверенность в себе: Ты попал в группу риска, это свидетельствует о высокой тревожности, неуверенности личности в себе, возможно, о наличии комплекса неполноценности, низкой самооценки. Эти качества личности также являются благодатной почвой для различных расстройств в поведении, а дети и подростки, имеющие высокие оценки по этойшкале, могут быть отнесены к группериска. \r\n';
    let hyperthymic1 = 'Также у тебя выявлен гипертимный тип акцентуации характера. Отличается почти всегда хорошим настроением, имеет высокий тонус, энергичен, активен, проявляет стремление быть лидером, неустойчив в интересах, недостаточно разборчив в знакомствах, не любит однообразия, дисциплины, монотонной работы, оптимистичен, переоценивает свои возможности, бурно реагирует на события, раздражителен. \r\n';
    let hysteroid1 = 'Также у тебя выявлен истероидный тип акцентуации характера. Проявляет повышенную любовь к самому себе, жажду внимания со стороны, потребность в восхищении, сочувствии со стороны окружающих людей, старается показать себя в лучшем свете, демонстративен в поведении, претендует на исключительное положение среди сверстников, непостоянен и ненадежен в человеческих отношениях. \r\n'; 
    let schizoid1 = 'Также у тебя выявлен шизоидный тип акцентуации характера. Характеризуется замкнутостью и неумением понимать состояние других людей, испытывает трудности в установлении нормальных отношений с людьми, часто уходит в себя, в свой недоступный другим людям внутренний мир, в мир фантазий и грез. \r\n';
    let emotionallyLabile1 = 'Также у тебя выявлен эмоционально-лабильный тип акцентуации характера. Характеризуется крайней непредсказуемостью настроения. Сон, аппетит, работоспособность и общительность зависят от настроения. Высокочувствителен к отношениям людей. \r\n'; 

    console.log('Очки отношения в семье ' + familyRelationships);
    console.log('Очки агрессии ' + aggressiveness);
    console.log('Очки недоверия к людям ' + vistrust);
    console.log('Очки неуверенность в себе ' + uncertainty);

    console.log('Очки акцентуфции гиперинтимной ' + hyperthymic)
    console.log('Очки акцентуации истероидной ' + hysteroid);
    console.log('Очки акцентуации шизоидной ' + schizoid);
    console.log('Очки акцентуации эмоционально-лабильной ' + emotionallyLabile);

    if (questionCount > 0) {
        alert('Тебе осталось ответить на ' + questionCount + ' вопросов');
    }
    
    //Сумирование всех результатов
    if (questionCount == 0) {        
        if (familyRelationships >= 8){
            summaryResult += familyRelationships2 ;
        }
        else {
            summaryResult += familyRelationships1;
        }

        if (aggressiveness >= 6) {
            summaryResult += aggressiveness2;
        }
        else {
            summaryResult += aggressiveness1;
        }
        if (vistrust >= 7) {
            summaryResult += vistrust2;
        }
        else {
            summaryResult += vistrust1;
        }
        if (uncertainty >= 8) {
            summaryResult += uncertainty2;
        }
        else {
            summaryResult += uncertainty1;
        }
        if (hyperthymic >= 3) {
            summaryResult += hyperthymic1;
        }
        if (hysteroid >= 3) {
            summaryResult += hysteroid1;
        }
        if (schizoid >= 3) {
            summaryResult += schizoid1;
        }
        if (emotionallyLabile >= 3) {
            summaryResult += emotionallyLabile1;
        }


        //сделать невидимость кнопки результат
        let buttonRez = document.getElementById('buttonResult')
        buttonRez.style.display = 'none';     
    }
    
    let rezultRozkov = document.getElementById('innerResult');
    rezultRozkov.innerHTML = summaryResult;
    
    console.log(summaryResult);
}

