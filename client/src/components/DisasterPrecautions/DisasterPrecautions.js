import React, { useState } from 'react';
import './DisasterPrecautions.css'; // You may create this file for styling

const DisasterPrecautions = () => {
  const [selectedDisaster, setSelectedDisaster] = useState("cyclone");
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language is English

  const handleButtonClick = (disasterType) => {
    setSelectedDisaster(selectedDisaster === disasterType ? null : disasterType);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const disasterPrecautions = {
    // ... existing precautions

    cyclone: {
      en: {
        do: [
          'Stay informed about weather conditions.', 
          'Prepare an emergency kit with essentials.', 
          'Follow evacuation orders if issued.', 
          'Secure outdoor objects and furniture.', 
          'Stay indoors during the storm.', 
        ],
        dont: [
          'Ignore evacuation warnings.', 
        'Stay near windows during the storm.', 
        'Drive or walk through flooded areas.', 
        'Use candles for lighting during power outages.', 
        ],
      },
      hi: {
        do: [
          'मौसम की स्थिति के बारे में सूचित रहें।', 
          'आवश्यक सामग्री सहित एक आपातकालीन किट तैयार करें।', 
          'यदि जारी किए गए हों, तो निवास आदेशों का पालन करें।', 
          'आउटडोर ऑब्जेक्ट्स और फर्नीचर को मजबूती से बंद करें।', 
          'तूफान के दौरान घर में ही रहें।', 
        ],
        dont: [
          'आवागाहन चेतावनियों को नजरअंदाज करें।', 
          'तूफान के दौरान खिड़कियों के पास रहें।', 
          'बहती इलाकों से गुजरने या चलने की कोशिश न करें।', 
          'पॉवर आउटेज के दौरान प्रकाश के लिए मोमबत्तियों का उपयोग न करें।',
        ],
      },
      te: {
        do: [
          'మిమ్మల్ని వాతావరణ పరిస్థితుల గురించి అవగాహనం చేయండి.', 
          'ఆపాతకాలీన కిట్‌ను అంగీకరించండి మరియు తయారు చేయండి.', 
          'ఎదురుచూసే అపరాధాల తోనే ముక్కలను మరియు గోడాలను మజబూతిగా అంగీకరించండి.', 
          'తుఫాన్ సమయంలో ఇంటరియర్లో ఉండండి.', 
        ],
        dont: [
          'ఎవరికి కూడా తలపారుటకు ప్రారంభించాండి.', 
          'తుఫాన్ సమయంలో కనపడే చిన్న చక్కరలను నమ్మించాండి.', 
          'బయటిలో ఉన్న విషయాలను లేకిండి.', 
          'పవర్ ఆవుటేజ్ సమయంలో మోమబత్తులతో ప్రకాశించడానికి ఉపయోగించాండి.', 
        ],
      },
      // Add translations for other languages as needed
    },


    earthquake: {
      en: {
        do: [
          'Drop, Cover, and Hold On during shaking.', 
          'Stay indoors away from windows.', 
          'Have an emergency supply kit.', 
          'Identify safe spots in each room.',  
        ],
        dont: [
          'Run outside during shaking.', 
        'Stand in doorways during shaking.', 
        'Use elevators during an earthquake.', 
        'Ignore aftershocks.', 
        ],
      },
      hi: {
        do: [
          'भूकंप के दौरान गिरावट, आवरण, और होल्ड ऑन करें।', 
          'खिड़कियों से दूर रहें इंडोर्स में ही।', 
          'एक आपातकालीन आपूर्ति किट रखें।', 
          'प्रत्येक कमरे में सुरक्षित स्थानों की पहचान करें।', 
        ],
        dont: [
          'गिरावट के दौरान बाहर भागें।', 
          'भूकंप के दौरान दरवाजों में खड़ा रहें।', 
          'भूकंप के दौरान एलिवेटर्स का उपयोग न करें।', 
          'आफ्टरशॉक्स को नजरअंदाज करें।', 
        ],
      },
      te: {
        do: [
          'భూకంపం సమయంలో గిరాక్రమణ, కవర్, మరియు హోల్డ్ ఆన్ చేయండి.', 
          'ఖాస్తా ఖాస్తా చక్కరల నుంచి దూరంగా ఉండండి.', 
          'ఆపాతకాలీన సరఫరా కిట్‌ను కలుగి ఉంచండి.', 
          'ప్రతి కమరాలో భద్రమైన స్థానాలను గుర్తించండి.', 
        ],
        dont: [
          'గిరాక్రమణ సమయంలో బయటికి రాను తీసేందుకు ప్రయాసం చేయండి.', 
          'భూకంపం సమయంలో దర్వాజాల దగ్గర ఉండండి.', 
          'భూకంపం సమయంలో ఎలివేటర్స్ ఉపయోగించవద్దు.', 
          'ఆఫ్టర్‌షాక్స్‌ను నమ్మించాండి.', 
        ],
      },
      // Add translations for other languages as needed
    },
    flood: {
      en: {
        do: [ 
          'Evacuate to higher ground if instructed.', 
          'Avoid walking or driving through flooded areas.', 
          'Have a family emergency plan.', 
          'Monitor weather updates and warnings.', 
        ], 
        dont: [ 
          'Drive through flooded roads.', 
          'Stay in a flooded building.', 
          'Underestimate the power of moving water.', 
          'Ignore evacuation orders.', 
        ], 
      },
      hi: {
        do: [ 
          'अगर निर्देशित है, उच्च स्थान पर निकलें।', 
          'बहते हुए क्षेत्रों से गुजरने या ड्राइव करने से बचें।', 
          'एक परिवार आपातकालीन योजना बनाएं।', 
          'मौसम की अपडेट और चेतावनियों का मॉनिटर करें।', 
        ], 
        dont: [ 
          'बहती सड़कों से गुजरें।', 
          'एक भीगे इमारत में रहें।', 
          'पानी की गति की ताकत को कम समझें।', 
          'निर्देशों को नजरअंदाज करें।', 
        ], 
      },
      te: {
        do: [ 
          'నిర్దేశించినట్లయితే, అంతటి ప్రదేశంలో వెళ్ళండి.', 
          'పోయే ప్రదేశాలను అనదానానికి లేదా డ్రైవ్ చేయకుండా ఉండండి.', 
          'ఒక కుటుంబ ఆపాతకాలీన యోజన చేయండి.', 
          'మౌసం నవీకరణలు మరియు హెచ్చరికలను మానిటర్ చేయండి.', 
        ], 
        dont: [ 
          'బహుళమైన రోడ్లను చేరవద్దు.', 
          'అంతుగా నిలిపిన భవనాల్లో ఉండకూడదు.', 
          'నీటి వేగానికి తగినండి.', 
          'నిర్దేశాలను నమ్మించాండి.', 
        ], 
      },
      // Add translations for other languages as needed
    },
    wildfire: {
      en: {
        do: [ 
          'Create a defensible space around your home.', 
          'Keep roofs and gutters clear of debris.', 
          'Have an emergency evacuation plan.', 
          'Stay informed about fire conditions.', 
        ], 
        dont: [ 
          'Ignore evacuation orders.', 
          'Leave windows or doors open during a wildfire.', 
          'Use flammable materials near your home.', 
          'Delay evacuation until the last minute.', 
        ], 
      },
      hi: {
        do: [ 
          'अपने घर के चारों ओर एक सुरक्षित क्षेत्र बनाएं।', 
          'छतें और गटरों को साफ रखें।', 
          'एक आपातकालीन निकासी योजना बनाएं।', 
          'आग की स्थिति के बारे में सूचित रहें।', 
        ], 
        dont: [ 
          'निर्देशों को नजरअंदाज करें।', 
          'एक आग के दौरान खिड़कियों या दरवाजों को खुला न छोड़ें।', 
          'अपने घर के पास आग के दौरान आगले सामग्री का उपयोग न करें।', 
          'निकटतम क्षेत्र में आग बचाने के लिए झड़ीली सामग्री का उपयोग न करें।', 
        ], 
      },
      te: {
        do: [ 
          'మీ ఇంటి సర్కారానికి సురక్షిత అంగడానికి అవగాహనా రఖండి.', 
          'చిన్న కూడా వేసవే చేయబడిన స్థలాలను క్రియాశీలం చేయండి.', 
          'ఆపరేషన్ కొమ్ముకున్నాడే, ఆపరేషన్ కొమ్మును పాటించండి.', 
          'ఆగిలి అన్నీ తరహా నేరుగా ఉండండి.', 
        ], 
        dont: [ 
          'నిర్దేశాలను ఉపేక్షించండి.', 
          'అగ్నిప్రవాహాల సమయంలో కనిపించే సాలులో ఉండండి.', 
          'కనిపించే సాలను నడిచేందుకు లేదా నడిచేందుకు నడిచేందుకు నడిచేందుకు.', 
          'విద్యుత్ అంధకారంలో ప్రకాశం పెడించడానికి మోముగా ఉపయోగించండి.', 
        ], 
      },
      // Add translations for other languages as needed
    },
    tornado: {
      en: {
        do: [ 
          'Seek shelter in a basement or storm cellar.', 
          'If no underground shelter is available, go to an interior room on the lowest floor.', 
          'Stay away from windows.', 
          'Listen to a weather radio or app for updates.', 
        ], 
        dont: [ 
          'Try to outrun a tornado in your vehicle.', 
          'Stay in a mobile home during a tornado.', 
          'Ignore tornado warnings.', 
          'Open windows to equalize pressure.', 
        ], 
      },
      hi: {
        do: [ 
          'एक बेसमेंट या तूफान सेलर में शरण लें।', 
          'अगर कोई भी भूमिगत शरण उपलब्ध नहीं है, निम्नतम मंजिल पर एक अंतर्निहित कमरे में जाएं।', 
          'खिड़कियों से दूर रहें।', 
          'अपडेट के लिए मौसम रेडियो या ऐप को सुनें।', 
        ], 
        dont: [ 
          'अपने वाहन में एक तूफान को पीछे छोड़ने की कोशिश न करें।', 
          'तूफान के दौरान एक मोबाइल होम में रहें।', 
          'तूफान चेतावनियों को नजरअंदाज करें।', 
          'दबाव को बराबर करने के लिए खिड़कियों को खोलें।', 
        ], 
      },
      te: {
        do: [ 
          'ఒక భూగర్భ యాంత్రికుడిని, కడిగి ఉండండి మరియు ఉండండి.', 
          'అంగడానికి కనపడండి వెనక్కి రానుండి దూరంగా ఉండండి.', 
          'చక్కటి కొనసాగించండి.', 
          'నవ్వుచేసే సమయంలో స్వయంని ఉండండి లేదా వచ్చే సమయంలో స్వయంని ఉండండి.', 
        ], 
        dont: [ 
          'మీ వాహనంలో తూఫాన్ను ఆవారా రానాడు.', 
          'తూఫాన్ సమయంలో ఒక మొబైల్ హోమ్‌లో ఉండండి.', 
          'తూఫాన్ హెచ్చరికలను నిరాకరించండి.', 
          'ప్రెస్షర్ నేరుకున్నట్లయితే కనిపించే సాలను మోచడానికి విండోలను తెరిచండి.', 
        ], 
    
      },
      // Add translations for other languages as needed
    },
    tsunami: {
      en: {
        do: [ 
          'Move to higher ground immediately.', 
          'Follow local evacuation routes.', 
          'Stay tuned to emergency alerts.', 
          'Have a tsunami emergency kit.', 
        ], 
        dont: [ 
          'Stay near the coast after a strong earthquake.', 
          'Return to the coast too soon after a tsunami warning.', 
          'Ignore evacuation orders.', 
          'Go to the beach to watch for a tsunami.', 
        ], 
      },
      hi: {
        do: [ 
          'तुरंत उच्च स्थान पर मुव करें।', 
          'स्थानीय निकासी के मार्गों का पालन करें।', 
          'आपातकालीन सुचना के लिए सुरक्षित रहें।', 
          'एक सुनामी आपातकालीन किट रखें।', 
        ], 
        dont: [ 
          'एक मजबूत भूकंप के बाद सहयता में रहें।', 
          'सुनामी चेतावनी के बाद बहुत जल्दी तट की ओर लौटें।', 
          'निर्देशों को नजरअंदाज करें।', 
          'एक सुनामी के लिए बीच पर जाने के लिए समुद्र की ओर जाएं।', 
        ], 
      },
      te: {
        do: [ 
          'తక్షణం అత్యంత ప్రదేశంకు జరపడండి.', 
          'స్థానిక నికాయాల దారికి అనుసరించండి.', 
          'ఎమర్జెన్సీ అలర్ట్‌లకు కావాలి.', 
          'ఒక త్సునామి ఎమర్జెన్సీ కిట్‌ను ఉంచండి.', 
        ], 
        dont: [ 
          'అదే త్వరగా ఒక గుండారికి తిరగండి త్వరలోనే.', 
          'ఒక త్సునామి హెచ్చరికలను నిరాకరించండి.', 
          'జరపడిన త్వర తర్వాత తీసుకోవడానికి తిరగండి.', 
          'ఒక త్సునామి హెచ్చరికలను నిరాకరించండి.', 
        ], 
    
      },
      // Add translations for other languages as needed
    },
    hurricane: {
      en: {
        do: [ 
          'Prepare a hurricane emergency kit.', 
          'Board up windows and secure outdoor objects.', 
          'Follow evacuation orders if issued.', 
          'Monitor weather updates and warnings.', 
        ], 
        dont: [ 
          'Ignore evacuation orders.', 
          'Stay in a mobile home during a hurricane.', 
          'Leave windows or doors open during the storm.', 
          'Drive through flooded roads.', 
        ], 
      },
      hi: {
        do: [ 
          'ఒక హెచ్చరికాన్ ఎమర్జెన్సీ కిట్‌ను సిద్ధంగా ఉంచండి.', 
          'విండోస్ ను తెగించడానికి మరియు బాహ్య వస్తువులను సురక్షితంగా ఉంచండి.', 
          'యదాపి విధిగా ఇస్యూ చేయబడుతుందా, నిర్వహించండి.', 
          'వాతావరణ అప్డేట్లు మరియు హెచ్చరికలను పరిశోధించండి.', 
        ], 
        dont: [ 
          'నిర్వాహణ ఆదేశాలను ఉపేక్షించండి.', 
          'హెచ్చరికల సమయంలో ఒక మొబైల్ హోమ్‌లో ఉండండి.', 
          'హెచ్చరికలను విఫలమైనట్లయితే విండోలను తెరిచండి లేదా తెరిచండి.', 
          'నదిలో ఉండడానికి సిడిలర్లను ఉపయోగించండి.', 
        ], 
      },
      te: {
        do: [ 
          'ఒక హెచ్చరికాన్ ఎమర్జెన్సీ కిట్‌ను సిద్ధంగా ఉంచండి.', 
          'విండోస్ ను తెగించడానికి మరియు బాహ్య వస్తువులను సురక్షితంగా ఉంచండి.', 
          'యదాపి విధిగా ఇస్యూ చేయబడుతుందా, నిర్వహించండి.', 
          'వాతావరణ అప్డేట్లు మరియు హెచ్చరికలను పరిశోధించండి.', 
        ], 
        dont: [ 
          'నిర్వాహణ ఆదేశాలను ఉపేక్షించండి.', 
          'హెచ్చరికల సమయంలో ఒక మొబైల్ హోమ్‌లో ఉండండి.', 
          'హెచ్చరికలను విఫలమైనట్లయితే విండోలను తెరిచండి లేదా తెరిచండి.', 
          'నదిలో ఉండడానికి సిడిలర్లను ఉపయోగించండి.', 
        ], 
    
      },
      // Add translations for other languages as needed
    },
    // ... other disaster types
  };

  const renderAccordionItem = (disasterType) => {
    const { do: dos, dont: donts } = disasterPrecautions[disasterType][selectedLanguage];
    const isActive = selectedDisaster === disasterType;

    return (
      <div className={`accordion-item ${isActive ? 'active' : ''}`} key={disasterType}>
        <button className="accordion-button" onClick={() => handleButtonClick(disasterType)}>
          {disasterType.charAt(0).toUpperCase() + disasterType.slice(1)}
        </button>
        {isActive && (
          <div className="panel">
            <ul>
              <li><strong>Do:</strong></li>
              {dos.map((doItem, index) => <li key={index}>{doItem}</li>)}
              <li><strong>Don't:</strong></li>
              {donts.map((dontItem, index) => <li key={index}>{dontItem}</li>)}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="disaster-precautions-container">
      <h1>Disaster Precautions</h1>
      <div className="language-buttons">
        <button className="english-class"  onClick={() => handleLanguageChange('en')}>English</button>
        <button className="hindi-class" onClick={() => handleLanguageChange('hi')}>
हिन्दी</button>
        <button className="telugu-class" onClick={() => handleLanguageChange('te')}>తెలుగు</button>
        {/* Add more language buttons as needed */}
      </div>
      <div className="accordion">
        {Object.keys(disasterPrecautions).map(disasterType =>
          renderAccordionItem(disasterType)
        )}
      </div>
    </div>
  );
};

export default DisasterPrecautions;