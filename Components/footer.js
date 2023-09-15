function footerJS() {
  // Create the footer container element
  var footerContainer = document.createElement("div");
  footerContainer.classList.add("footer");

  // Create the footer content
  let footerContent = `
   <!-- Footer module content -->
   <div>
   <p>Quick Links :</p>
   <a href="/Pages/Accordian Menu/accordian.html"><p>Accordian</p></a>
   <a href="/Pages/Animated CountDown/AnimatedCountDown.html"><p>Animated Count Down</p></a>
   <a href="/Pages/Animated Link Button/animatedLinkButton.html"><p>Animated Link Button</p></a>
   <a href="/Pages/Animated Navigation/AnimatedNavigation.html"><p>Animated Navigation</p></a>
   <a href="/Pages/Auto Text Effect/AutoTextEffect.html"><p>Auto Text Effect</p></a>
</div>
<div>
   <p>Quick Links :</p>
   <a href="../Accordian Menu/accordian.html"><p>Accordian</p></a>
   <a href="../Accordian Menu/accordian.html"><p>Accordian</p></a>
   <a href="../Accordian Menu/accordian.html"><p>Accordian</p></a>
   <a href="../Accordian Menu/accordian.html"><p>Accordian</p></a>
   <a href="../Accordian Menu/accordian.html"><p>Accordian</p></a>
</div>
<div>
   <p>Quick Links :</p>
   <a href="../Accordian Menu/accordian.html"><p>Accordian</p></a>
   <a href="../Accordian Menu/accordian.html"><p>Accordian</p></a>
   <a href="../Accordian Menu/accordian.html"><p>Accordian</p></a>
   <a href="../Accordian Menu/accordian.html"><p>Accordian</p></a>
   <a href="../Accordian Menu/accordian.html"><p>Accordian</p></a>
</div>
<div>
   <p>Quick Links :</p>
   <a href="../Accordian Menu/accordian.html"><p>Accordian</p></a>
   <a href="../Accordian Menu/accordian.html"><p>Accordian</p></a>
   <a href="../Accordian Menu/accordian.html"><p>Accordian</p></a>
   <a href="../Accordian Menu/accordian.html"><p>Accordian</p></a>
   <a href="../Accordian Menu/accordian.html"><p>Accordian</p></a>
</div>
<div>
   <h2>Follow us on :</h2>
   <div>
      <img
        src="data:image/png;base64,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"
        alt=""
      />
      <p><a href="https://www.linkedin.com/in/vaibhavmougha/">vaibhavmougha</a></p>
    </div>

    <div>
      <img
        src="data:image/png;base64,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"
        alt=""
      />
      <p><a href="https://github.com/vaibhav-mougha">vaibhav-mougha</a></p>
    </div>

    <div>
        <img
        src="data:image/png;base64,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"
        alt=""
      />
        <p><a href="">moughavaibhav@gmail.com</a></p>

    </div>

    <div>
        <img
        src="data:image/jpeg;base64,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"
        alt=""
      /> 
        <p><a href="">+91 8130963653</a></p>
    </div>

    <div>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <p><a href="">Dilshad Garden, New Delhi, India</a></p>
    </div>
</div>
</div>

 `;

  // Set the content of the footer container
  footerContainer.innerHTML = footerContent;

  // Append the footer container to the footer element on the page
  document.querySelector("#footer").append(footerContainer);
}

export default footerJS;
