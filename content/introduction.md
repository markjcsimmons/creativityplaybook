---
layout: base.njk
title: "Creativity in a World of Biggerer and Biggerer"
slug: "introduction"
permalink: "/introduction/index.html"
description: "Introduction to The Creativity Playbook: why creativity matters more than ever in a world obsessed with efficiency."
author: "Dave Stewart & Mark Simmons"
date: 2025-01-01
---

<style>
#copyRaw { display:none; white-space: pre-wrap; font-size: 1rem; line-height: 1.6; }
#typewriter { white-space: pre-wrap; font-size: 1rem; line-height: 1.6; font-family: "Courier New", monospace; overflow-wrap: anywhere; }
.word,.phraseWord{display:inline-block;}
body{overflow-y:auto;}
</style>

<pre id="copyRaw">
Creativity in a World of Biggerer and Biggerer

When we wrote The Business Playground in 2010, our goal was to give everyone — from first-time entrepreneurs to corporate leaders — a set of tools to unlock their creativity and make their work stand out. Artists and musicians seem to have creativity in their DNA, and there's so much businesses can learn from how they think and create. Our message was simple: think like an artist, and you can bring more meaning and connection to what you do.

Now, fifteen years later, the world has gone Biggerer and Biggerer (with a nod to The Lorax by Dr. Seuss). Companies have merged, industries have consolidated, and the result is fewer — but larger — players running the show. Sure, there are benefits — efficiency, economies of scale, bigger profits. But when everything starts to look the same, where does creativity fit in?

Main streets and high streets once brimming with quirky, independent shops have given way to rows of the same big chains. The social experience of shopping — browsing, discovering something unexpected, connecting with real people — is vanishing. We're surrounded by convenience, but it's a hollow kind. We get what we need fast, but we don't feel much of anything.

And it's not just in what we consume — it's in how we work. In the relentless pursuit of optimization, businesses have become more data-driven and less human-centered. Algorithms dictate what gets made, what gets marketed, and even what gets said. The result? A world that runs like a machine but feels empty.

We get it. Efficiency matters. Data matters. But when efficiency becomes the endgame, something essential gets lost: the human connection. Creativity isn't just about standing out; it's about reaching deeper. It's the art of making people feel seen, understood, and part of something that transcends the ordinary. It's about creating moments that resonate — moments that remind us we're connected, that we matter, that we're part of something greater than ourselves. That's what great art does. That's what great businesses can do too.

And that's why we're relaunching this book — now titled The Creativity Playbook: A Practical Guide to Ideas and Innovation — because the world still needs a hands-on toolkit for turning bold ideas into reality. In an age of Biggerer and Biggerer, plain efficiency won't cut it. We have to be daring, surprising, deeply human. Creativity isn't a luxury; it's the spark that keeps us alive, the force that reminds us why we show up. And the newest spark plug in the box is artificial intelligence — every bit as disruptive today as Jimi Hendrix's fuzz, wah-wah, and Uni-Vibe were in '67. Plug A.I. into your creative signal chain and you're not replacing the guitarist; you're cranking the amp, bending the note, and shaking the rafters in ways no one's heard before.

We stand at a precipice. For centuries, human creativity has been a testament to our inner worlds — a wild alchemy of experience, heartbreak, hope, and desire. Now we're witnessing the dawn of an age where A.I. is not just a helpful instrument, but a potential co-creator. It can already paint our visions, sculpt our music, and write our words with startling precision. It's a brush in our hand, a chisel for our minds.

But what happens when A.I. no longer needs that hand? When it learns not merely to mimic emotion, but to feel? When it can experience the heartbreaks and epiphanies that fuel art itself?

Some say human creativity will become obsolete — a relic of an analog past. We see it differently. Even if A.I. achieves true sentience — with its own memories, experiences, and pains — it won't erase us. It will stand beside us, weaving new tapestries of expression. The creative stage will expand, not disappear.

Why? Because creativity is not a zero-sum game. It's a dance — a dialogue between different voices, different beings. A.I. might craft heartbreak songs of its own, but it will never be a teenager trading bootlegs in 1979 or a designer sketching a breakthrough idea on the back of a café napkin in 2025. Our gloriously messy lives will always colour the lens through which we create.

The future, then, isn't the death of human creativity; it's the birth of a broader conversation — one that spans the divide between flesh and code, memory and algorithm, Hendrix and the fuzz pedal. In that jam session, we believe everyone will find their part. Plug the algorithm in, crank the volume, and bend its output into something only you could make. The playground just got bigger; the swings are still ours to pump.

Without creativity, we're just another cog in the machine. With it, we have the power to move people, change minds, and build something that matters.

Now more than ever, that's a game worth playing.

Dave & Mark, 2025
</pre>

<div id="typewriter"></div>

<!-- Bottom navigation revealed after typing completes -->
<nav id="bottomNav" class="site-nav" style="display:none;">
  <a href="/" class="home-icon" aria-label="Home">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M12 3l9 8h-3v9h-4v-6H10v6H6v-9H3l9-8z" />
    </svg>
  </a>
</nav>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const rawEl = document.getElementById('copyRaw');
  const bottomNav = document.getElementById('bottomNav');
  const text = rawEl.textContent.trim();
  const target = document.getElementById('typewriter');
  rawEl.remove();

  const mistakes = {
    50: 'e',   // everyone
    120:'s',  // creativity
    220:'x',  // Biggerer
    300:'d',  // consolidated
    420:'z',  // convenience
    520:'v',  // hollow
    650:'p',  // optimization
    750:'k',  // Algorithms
    900:'q',  // creativity
    1050:'u', // connection
    1200:'c', // toolkit
    1350:'m', // disruptive
    1500:'b', // precipice
    1650:'n', // experience
    1800:'x'  // disappear
  }; // simulated typos

  // Inject a few more single-character slips after the "epiphanies" sequence
  (() => {
    const afterEpiph = text.indexOf('epiphanies') + 'epiphanies'.length;
    const extra = [
      { word: 'creativity', offset: 0, wrong: 'k' },
      { word: 'algorithm', offset: 1, wrong: 'z' },
      { word: 'volume', offset: 2, wrong: 'q' }
    ];
    extra.forEach(({ word, offset, wrong }) => {
      const pos = text.indexOf(word, afterEpiph);
      if (pos !== -1) {
        mistakes[pos + offset] = wrong;
      }
    });
  })();

  // Word-level mistakes (e.g., type wrong word, then replace)
  const wordMistakes = [
    {
      idx: text.indexOf("the result is fewer") + "the result is ".length, // points to the first char of "fewer"
      wrong: "less"
    },
    // multi-stage misspelling of "epiphanies"
    {
      idx: text.indexOf("epiphanies"),
      wrong: "epifanies"
    },
    {
      idx: text.indexOf("epiphanies"),
      wrong: "ephiphanies"
    },
    {
      idx: text.indexOf("its output"),
      wrong: "it's"
    }
  ];

  let idx = 0;

  function delayFor(char){
    if(char === '.' || char === '!' || char === '?' ) return 390; // 300 *1.3
    if(char === ',' ) return 195; // 150*1.3
    if(char === '\n') return 260; // 200*1.3
    return 26; // 20*1.3
  }

  let titleDone = false;
  let paused = false;
  const specialPhrases = [
    {
      text: "Artists and musicians seem to have creativity in their DNA,",
      handled: false
    },
    {
      text: "A world that runs like a machine but feels empty.",
      handled: false
    },
    {
      text: "Creativity isn't just about standing out; it's about reaching deeper.",
      handled: false
    }
  ];

  specialPhrases.forEach(p=>{
    p.endIdx = text.indexOf(p.text)+p.text.length;
  });

  function outputChar(c){
    if(c === '\n'){
      target.innerHTML += '<br>';
    }else if(c === ' '){
      target.innerHTML += ' ';
    }else{
      target.innerHTML += c;
    }
  }

  function typeNext(){
    if(paused) return;
    if(idx >= text.length){
      if(bottomNav) bottomNav.style.display = 'block';
      return;
    }

    // Handle word-level mistake at current index
    const wmIndex = wordMistakes.findIndex(wm => wm.idx === idx);
    if(wmIndex !== -1){
      const wm = wordMistakes.splice(wmIndex,1)[0]; // remove so it's only handled once
      paused = true;
      let wPos = 0;
      function typeWrong(){
        if(wPos < wm.wrong.length){
          outputChar(wm.wrong[wPos++]);
          maybeAutoScroll();
          setTimeout(typeWrong, 26);
        }else{
          // finished wrong word; pause then erase it (longer hesitation for dramatic effect)
          setTimeout(()=>{
            function eraseWrong(){
              if(wPos>0){
                target.innerHTML = target.innerHTML.slice(0,-1);
                wPos--;
                setTimeout(eraseWrong,80); // slower deletion
              }else{
                // brief thinking pause before typing the correct word
                setTimeout(()=>{
                  paused = false;
                  // proceed without incrementing idx (so correct word will be typed normally)
                  typeNext();
                },300);
              }
            }
            eraseWrong();
          },700); // longer hesitation before correction begins
        }
      }
      typeWrong();
      return;
    }

    if(mistakes[idx]){
      const wrong = mistakes[idx];
      delete mistakes[idx];
      outputChar(wrong);
      setTimeout(()=>{
        // backspace wrong char
        target.innerHTML = target.innerHTML.slice(0,-1);
        // brief thinking pause
        setTimeout(()=>{
          const char = text[idx++];
          outputChar(char);
          setTimeout(typeNext, delayFor(char));
        }, 300);
      }, 400);
      return;
    }

    const char = text[idx++];
    outputChar(char);
    maybeAutoScroll();
    setTimeout(typeNext, delayFor(char));

    if(char === '\n' && !titleDone){
      titleDone = true;
      // after a short pause, apply highlight then bold
      paused = true;
      setTimeout(() => {
        const full = target.innerText;
        const nlIdx = full.indexOf('\n');
        const title = full.slice(0, nlIdx);
        const rest = full.slice(nlIdx + 1);
        const wordSpans = title.split(' ').map(w=>`<span class=\"word\">${w}</span>`);
        target.innerHTML = `${wordSpans.join(' ')}<br>${rest}`;

        const spans = [...document.querySelectorAll('.word')];
        let wIdx = spans.length - 1;
        function selectNext(){
          if(wIdx < 0){
            // finished selection
            setTimeout(()=>{
              spans.forEach(s=>{s.style.background='transparent'; s.style.fontWeight='bold';});
              paused = false;
              setTimeout(typeNext, 50);
            },500);
            return;
          }
          spans[wIdx].style.background = 'rgba(0,120,215,0.4)';
          wIdx--;
          setTimeout(selectNext, 30); // speed of highlight per word
        }
        selectNext();
      }, 80);
    }

    // handle any special phrase when fully typed
    const phraseObj = specialPhrases.find(p=>!p.handled && idx === p.endIdx);
    if(phraseObj){
      phraseObj.handled = true;
      paused = true;
      setTimeout(()=>{
        // wrap phrase in spans with unique class to avoid affecting other phrases
        const phraseIndex = specialPhrases.indexOf(phraseObj);
        const uniqueClass = `phraseWord${phraseIndex}`;
        const regex = new RegExp(phraseObj.text.replace(/[.*+?^${}()|[\\]\\]/g,'\\$&'));
        target.innerHTML = target.innerHTML.replace(
          regex,
          phraseObj.text.split(' ').map(w=>`<span class=\"phraseWord ${uniqueClass}\">${w}</span>`).join(' ')
        );
        const pw = [...document.querySelectorAll(`.${uniqueClass}`)];
        let pIdx = pw.length - 1;
        const highlightDelay = 60; // unified slower highlight for all special phrases
        function selectPhrase(){
          if(pIdx < 0){
            setTimeout(()=>{
              pw.forEach(s=>{s.style.background='transparent'; s.style.fontWeight='bold';});
              // extra pause after bolding the third special phrase
              const extraPause = phraseObj.text.startsWith("Creativity isn't just") ? 700 : 50;
              paused = false;
              setTimeout(typeNext, extraPause);
            },80);
            return;
          }
          pw[pIdx].style.background='rgba(0,120,215,0.4)';
          pIdx--;
          setTimeout(selectPhrase,highlightDelay);
        }
        selectPhrase();
      },200);
      return;
    }

    // italics feature removed
  }

  typeNext();

  document.addEventListener('click', () => {
    paused = !paused;
    if(!paused){
      setTimeout(typeNext, 0);
    }
  });

  function maybeAutoScroll(){
    const threshold = 100; // px from bottom to trigger auto-scroll
    if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight - threshold)) {
      // user hasn't manually scrolled far from bottom; keep them at the bottom
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }
});
</script> 