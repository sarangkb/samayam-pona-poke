'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, User, Lock, BookOpen, Calendar, ArrowLeft } from 'lucide-react';

// Questions data
const questions = [
  {
    question: "Nee ippo vare enthokke achieve cheythu?",
    answers: ["Ente phone-il 6 apps uninstall cheythu.", "Enthayalum ni padichathu Google-il undu."]
  },
  {
    question: "Enthina nee advice kodukkunnathu? Nee oru example aakilla alle?",
    answers: ["Enthayalum enne kelkkaruth... nee thottu kazhinjitt alle!", "Advice kodukkunnathu fun aanu, follow cheyyan venda."]
  },
  {
    question: "Enthu talent undu nee? Time waste cheyyuka alle?",
    answers: ["Aan, procrastination full skill set aanu.", "Online ayirikkumbol njan Einstein aanu."]
  },
  {
    question: "Enthina nee smart aayi nadakkunnu? GPAlle fail ayi alle?",
    answers: ["Confidence undu... qualification venda.", "Nadakkuvaan chilappol brain venda."]
  },
  {
    question: "Enthokke neeyude dreams? Sleep illa alle?",
    answers: ["Dream aanu... action pending.", "Dream kazhinju alarm il vicharichu."]
  },
  {
    question: "Nee paranjathokke veruthe alle?",
    answers: ["Enikishtam parayuka... logic venda.", "Truth aanu... but recycled."]
  },
  {
    question: "Nee real aayittenthengilum create cheythittundo?",
    answers: ["Aan... excuses onnum miss aayilla.", "Ente idea-lum, Google-lum oru difference illa."]
  },
  {
    question: "Enthina ee overconfidence? Achievements onnum illa alle?",
    answers: ["Look-u mathi, content thakarnu.", "Self-love overdose aanu."]
  },
  {
    question: "Nee kazhiyunnu enn parayumbo proof undo?",
    answers: ["Aan, evidence delete cheythu.", "Kazhinjathinu review illa."]
  },
  {
    question: "Enthina nee ella karyathil opinion undennu thonnunnu?",
    answers: ["Opinion illa... performance aanu.", "Sound padichu... sense poyi."]
  },
  {
    question: "Nee enne impress cheyyan nokkiyathano?",
    answers: ["Enthina? Eniku ithrayum free time undo?", "Impress aavenda... suffer mathi."]
  },
  {
    question: "Nee thanne oru brand ennu thonnunnu?",
    answers: ["Aan... expired item aayalum hype undu.", "Brand aanu... but local setting-il."]
  },
  {
    question: "Enthina nee always complain cheyyunnu? Solution undo?",
    answers: ["Complaint aanu main content.", "Solution? Athu mathippu kazhinju varum."]
  },
  {
    question: "Nee kazhinjittundo onnum life-il?",
    answers: ["Kazhinjilla... start aavumbo parayam.", "Kazhichathokke ego aanu."]
  },
  {
    question: "Enthina nee ivide ingane over aayi irikkunnathu?",
    answers: ["Spotlight njan thanne aanu.", "Njan scene-il undenkil silence venda."]
  },
  {
    question: "Nee college-il enthokke padikkunnu?",
    answers: ["Mostly WhatsApp memes and exam fear.", "Padikkarilla... just vibe check."]
  },
  {
    question: "CGPA ethra?",
    answers: ["Life CGPA aano? Athu -404.", "High score, low knowledge."]
  },
  {
    question: "Project kazhinjo?",
    answers: ["Kazhinju... Google drive-il panic mode-il undu.", "Copy-paste with feelings."]
  },
  {
    question: "Nee ethra sem aanu?",
    answers: ["Mentally last sem.", "Technically 6th, emotionally dropout."]
  },
  {
    question: "Nee yude job enthanu?",
    answers: ["Stress collector and meme sharer.", "Salary illa, just emotional damage."]
  },
  {
    question: "Enthina nee engineering choose cheythathu?",
    answers: ["Ente achante dream aanu... eniku nightmare.", "Mathippu kazhiyumbo explain cheyyam."]
  },
  {
    question: "Nee thudangiyathenthinu kazhinjilla?",
    answers: ["Passion undu... pakshe patience illa.", "Enthayalum halfway-le rage quit aavum."]
  },
  {
    question: "Freelance cheyyunille?",
    answers: ["Aah, stressum freelancum free aayirikkum.", "Client ennu parayunna word kandittu odunnu."]
  },
  {
    question: "Enthina padikkunnu if job illa?",
    answers: ["Timepass-ine graduation ennu vilikkaruth.", "Degree undu... use illa."]
  },
  {
    question: "Nee invest cheyyunille?",
    answers: ["Aan... in overpriced coffee and broken dreams.", "Ente bank balance = respect in group chat."]
  },
  {
    question: "Enthina startup nokkunnu?",
    answers: ["Idea undu, aashamsakal mathram undu.", "Shark Tank-il kayarumbo ariyam."]
  },
  {
    question: "Part-time job undo?",
    answers: ["Aah, existential crisis full-time aanu.", "Insta scroll cheyyunnu pay illa."]
  },
  {
    question: "Enthina cash illathe pokunnu?",
    answers: ["Mood undu, wallet illa.", "ATM polum enne ignore cheyyunnu."]
  },
  {
    question: "Career goal enthanu?",
    answers: ["Survive till Friday.", "Be rich without working."]
  },
  {
    question: "Enthina every year plan maarunnu?",
    answers: ["Dream flexible aanu.", "Life Excel sheet corruption aayi."]
  },
  {
    question: "Entha internship kazhinju onnum ariyilla?",
    answers: ["Coffee fetch cheyyunnu expert ayi.", "Skill earn cheyyan poyappol soul lost aayi."]
  },
  {
    question: "YouTube channel undallo?",
    answers: ["Aan, but viewers kittan algorithm thallunu.", "I upload, my mom watch, that's it."]
  },
  {
    question: "Enthina appo podcast thudangiyathu?",
    answers: ["Talk cheyyan ishtam, listen cheyyan mathram venda.", "Opinions undu, facts illa."]
  },
  {
    question: "Enthina shopping if money illa?",
    answers: ["Therapy alle bro.", "Wishlist is my personality now."]
  },
  {
    question: "Enthina resume-il 6 skill paranju?",
    answers: ["Canva-il CV color full green aakendallo.", "Skill illa, spelling okke correct aanu."]
  },
  {
    question: "Enthina manager block cheythathu?",
    answers: ["Zoom background-il Kerala beach set cheythu.", "Ente vibe avante KPIs kazhichu."]
  },
  {
    question: "Nee HR-il apply cheytho?",
    answers: ["Ente attitude ku match aayilla.", "Overqualified for underpay."]
  },
  {
    question: "Side hustle undo?",
    answers: ["Just side stress undu.", "Hustle kazhinju hustle kazhinju nothing."]
  },
  {
    question: "Coding padikkunnille?",
    answers: ["Aan, pakshe semicolon eniku vendilla.", "Compiler enne roast cheyyunnu."]
  },
  {
    question: "Enthina job-il entry illa?",
    answers: ["Entry point-il security irangiyirunnu.", "Job varumbol njan DND-il aayirunnu."]
  },
  {
    question: "Does your cat flow?",
    answers: ["Yes, like my GPA", "No, she became a resistance wire"]
  },
  {
    question: "Ninte chargerinte soul evida?",
    answers: ["Adichu pooyi", "KSEB took custody"]
  },
  {
    question: "Wi-Fi signal strong aanenkil ninte confidence enthina weak?",
    answers: ["Signal strong aanu, self-esteem corrupted.", "Router strong aanu, willpower lag cheyyunnu."]
  },
  {
    question: "Nee padikkunnu ennu parayunnu, pakshe Netflix history suggest cheyyunnilla?",
    answers: ["Study break 8 hours long aayirunnu.", "Netflix aanu ente syllabus."]
  },
  {
    question: "Phone charge kazhinju enkilum scroll cheyyumo?",
    answers: ["1% battery il Instagram stories kanaam.", "Power bank life support system aanu."]
  },
  {
    question: "Assignment deadline aanu, Netflix suggestions enthina interesting aayathu?",
    answers: ["Procrastination algorithm advanced aanu.", "Deadline pressure il entertainment taste improve aavum."]
  },
  {
    question: "Ente laptop hang aayal njan enthinu hang aavunnu?",
    answers: ["Emotional synchronization aanu.", "Hardware-software-mindware connected aanu."]
  },
  {
    question: "Exam kazhinju confidence undu, result varumbol anxiety enthina?",
    answers: ["Confidence temporary, anxiety permanent feature.", "Exam hall-il Einstein, result day-il zero."]
  },
  {
    question: "Group project-il njan contribute cheytho illa, team-mates enthina credit tharunnu?",
    answers: ["Invisible contribution aanu ente specialty.", "Moral support koduthu, technical support illa."]
  },
  {
    question: "Online class attend cheyyunnu, camera off microphone mute, present aano absent aano?",
    answers: ["Physically present, mentally Netflix-il.", "Schrodinger's student - present and absent simultaneously."]
  },
  {
    question: "Semester results postpone aayal relief thonnunnu, announcement varumbol tension enthina?",
    answers: ["Hope oru drug aanu, reality withdrawal symptoms.", "Postponement hope tharunnu, announcement reality check."]
  },
  {
    question: "Coding cheyyumbol error varunnu, Google search cheyyunnu, Stack Overflow copy cheyyunnu - njan developer aano?",
    answers: ["Copy-paste developer certified.", "Google Assistant with coding symptoms."]
  },
  {
    question: "Resume-il 'Quick Learner' ennu ezhuthiyathu, pakshe YouTube tutorial skip cheyyunnu enthina?",
    answers: ["Learning curve too slow for my speed.", "Tutorial intro music-il patience kazhinjippoyi."]
  },
  {
    question: "Job interview kazhinju 'We'll get back to you' ennu parayumbol hope undu, callback illa enkil depression enthina?",
    answers: ["False hope marketing strategy aayirunnu.", "'We'll get back' aanu corporate ghosting."]
  },
  {
    question: "College-il friend circle undu, WhatsApp-il active aanu, loneliness feel cheyyunnu enthina?",
    answers: ["Digital friendship, analog loneliness.", "Connection undu, but authentic communication illa."]
  },
  {
    question: "Salary account-il balance zero, EMI debit aayal panic, UPI payment success aayal surprise enthina?",
    answers: ["Mathematics magic aanu, logic illa.", "Bank balance quantum physics follow cheyyunnu."]
  },
  {
    question: "Parents parayunnu 'Study well', result poor aayaal 'Marks not important' enthina parayunnu?",
    answers: ["Parenting algorithm adaptive aanu.", "Expectations dynamic, consolation static."]
  },
  {
    question: "Social media-il everyone successful ennu thonnunnu, njan failure ennu feel cheyyunnu enthina?",
    answers: ["Success highlight reel vs failure behind-the-scenes.", "Comparison thief of joy, Instagram thief of reality."]
  },
  {
    question: "Weekend plan undaakki, Sunday evening regret cheyyunnu enthina?",
    answers: ["Planning optimistic, execution realistic.", "Weekend expectation vs Monday morning reality."]
  },
  {
    question: "Motivation Monday strong, Tuesday tired, Wednesday weak, Thursday thinking, Friday free - weekly cycle enthinaanu?",
    answers: ["Week days personality disorder aanu.", "Motivation battery weekly charging cycle."]
  },
  {
    question: "Dream big ennu parayunnu, action small ennu kaanunnu, gap enthinu bridge cheyyunilla?",
    answers: ["Dream department active, execution department leave-il.", "Vision HD, action low resolution."]
  },
  {
    question: "Success story inspire cheyyunnu, failure story relate cheyyunnu, njan evideya?",
    answers: ["Inspiration passive mode, relation active mode.", "Success aspirational, failure relatable."]
  },
  {
    question: "Knowledge Google-il undu, wisdom experience-il undu, njan enthil undu?",
    answers: ["Confusion-il comfortably settled.", "Google dependency with experience scarcity."]
  },
  {
    question: "Time management important ennu ariyaam, time waste cheyyunnu enthina?",
    answers: ["Knowledge theoretical, application mythical.", "Time management syllabus-il undu, practice-il illa."]
  },
  {
    question: "Positive thinking powerful ennu parayunnu, negative thoughts dominant enthina?",
    answers: ["Negativity default setting aanu.", "Positive thinking guest mode, negative resident."]
  },
  {
    question: "Health wealth aanu ennu parayunnu, junk food kazhikkunnu enthina?",
    answers: ["Health long-term investment, taste immediate gratification.", "Wisdom head-il, impulse stomach-il strong."]
  },
  {
    question: "Early to bed, early to rise ennu parayunnu, late night scrolling enthina?",
    answers: ["Instagram algorithm sleep cycle override cheyyunnu.", "Early sleep theory, late scroll practice."]
  },
  {
    question: "Money can't buy happiness ennu parayunnu, salary increase-il happy aayaal enthina?",
    answers: ["Happiness temporary, money immediate.", "Philosophy theory, salary reality."]
  },
  {
    question: "Life is journey ennu parayunnu, destination focus cheyyunnu enthina?",
    answers: ["Journey enjoy cheyyan skills illa.", "Process boring, result exciting."]
  },
  {
    question: "Present moment precious ennu parayunnu, future worry cheyyunnu enthina?",
    answers: ["Present anxiety, future uncertainty.", "Mindfulness theory, worry practice."]
  }
];

export default function KTUPortal() {
  const [currentPage, setCurrentPage] = useState('login');
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  // Shuffle questions on component mount
  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    // Simulate login delay
    setTimeout(() => {
      setLoading(false);
      setCurrentPage('dashboard');
    }, 2000);
  };

  const handleAttendance = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCurrentPage('attendancePrompt');
    }, 3000);
  };

  const startQuestionnaire = () => {
    // Reset and shuffle questions
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setCurrentPage('questionnaire');
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setTimeout(() => {
      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Reset to beginning for infinite loop
        setCurrentQuestionIndex(0);
        const newShuffled = [...questions].sort(() => Math.random() - 0.5);
        setShuffledQuestions(newShuffled);
      }
      setSelectedAnswer('');
    }, 1000);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return (
          <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="w-full max-w-md">
              {/* KTU Logo placeholder */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">KTU</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Sahrdaya College of Engineering and Technology
                </h1>
                <p className="text-gray-600">KTU Student Portal Login</p>
              </div>

              {loading ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Authenticating...</p>
                </div>
              ) : (
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Username
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your username"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      <Lock className="inline w-4 h-4 mr-2" />
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your password"
                    />
                  </div>
                  
                  <button
                    onClick={handleLogin}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-medium"
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      case 'dashboard':
        return (
          <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-4xl mx-auto">
              <header className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Welcome, Student</h1>
                <p className="text-gray-600">Sahrdaya KTU Student Portal</p>
              </header>
              
              <div className="grid md:grid-cols-2 gap-6">
                <button
                  onClick={() => setCurrentPage('results')}
                  className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-200 text-left group"
                >
                  <BookOpen className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition duration-200" />
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">📁 Results</h2>
                  <p className="text-gray-600">View your semester results</p>
                </button>
                
                <button
                  onClick={handleAttendance}
                  className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-200 text-left group"
                >
                  <Calendar className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition duration-200" />
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">📊 Attendance</h2>
                  <p className="text-gray-600">Check your attendance records</p>
                </button>
              </div>
            </div>
          </div>
        );

      case 'results':
        return (
          <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="text-center max-w-md">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="absolute top-4 left-4 flex items-center text-blue-600 hover:text-blue-800"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </button>
              
              <div className="text-6xl mb-8">😂</div>
              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Nokki irunno ippo kittum 😂
              </h1>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-600 italic">
                  "CGPA: To be manifested by universe."
                </p>
              </div>
            </div>
          </div>
        );

      case 'attendancePrompt':
        return (
          <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="text-center max-w-md">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="absolute top-4 left-4 flex items-center text-blue-600 hover:text-blue-800"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </button>
              
              {loading ? (
                <div>
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600 mb-4">KTU Server Loading...</p>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    While you wait, would you like to participate in a fun question session?
                  </h2>
                  
                  <div className="space-y-4">
                    <button
                      onClick={startQuestionnaire}
                      className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition duration-200"
                    >
                      Yes
                    </button>
                    <button
                      onClick={startQuestionnaire}
                      className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:red-700 transition duration-200"
                    >
                      No
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-500 mt-4 italic">
                    (Your choice doesn't matter, you're doing this anyway)
                  </p>
                </div>
              )}
            </div>
          </div>
        );

      case 'questionnaire':
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        if (!currentQuestion) return <div>Loading...</div>;

        return (
          <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="absolute top-4 left-4 flex items-center text-purple-600 hover:text-purple-800 bg-white px-3 py-2 rounded-md shadow-md"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Escape This Madness
            </button>
            
            <div className="max-w-2xl mx-auto pt-16">
              <div className="text-center mb-8">
                <p className="text-purple-600 font-medium">
                  Question {currentQuestionIndex + 1} of ∞
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) % 10) * 10}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center leading-relaxed">
                  {currentQuestion.question}
                </h2>
                
                <div className="space-y-4">
                  {currentQuestion.answers.map((answer, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(answer)}
                      className={`w-full p-4 text-left rounded-lg border-2 transition duration-200 ${
                        selectedAnswer === answer
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-300 hover:border-purple-300 hover:bg-purple-25'
                      }`}
                      disabled={selectedAnswer !== ''}
                    >
                      <span className="font-medium text-gray-700">{String.fromCharCode(65 + index)}.</span>
                      <span className="ml-2 text-gray-800">{answer}</span>
                    </button>
                  ))}
                </div>
                
                {selectedAnswer && (
                  <div className="mt-6 text-center">
                    <div className="animate-pulse text-purple-600 font-medium">
                      Processing your existential crisis...
                    </div>
                  </div>
                )}
              </div>
              
              <div className="text-center text-sm text-gray-500">
                <p>🤔 This questionnaire never ends. Welcome to your digital purgatory.</p>
              </div>
            </div>
          </div>
        );

      default:
        return <div>404 - Page not found</div>;
    }
  };

  return (
    <div className="font-sans">
      {renderPage()}
    </div>
  );
}
