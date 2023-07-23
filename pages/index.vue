<template>
  <div>
    <nav>
      <div
        class="w-full h-full py-[8px] px-[32px] border-0.5 border-black-10 flex justify-between items-center"
      >
        <Logo class="w-[33px] h-[31.88px] fill-[#DC143C]" />
        <Burger />
      </div>
    </nav>
    <div class="body px-[32px]">
      <div
        class="hero h-[90vh] flex gap-y-32 flex-col items-center justify-center"
      >
        <div class="w-full text-left text-primary text-heading-3 font-poppins">
          <h1 class="">Hello, I'm Baguma</h1>
        </div>
        <div
          class="typer w-full text-left text-black text-heading-5 font-poppins"
        >
          <p>I am an Applications Developer</p>
        </div>
        <div class="w-full text-center text-black text-paragraph font-lexend">
          <p>
            I help businesses implement innovative and user-friendly web, mobile
            and desktop applications. Get in touch today to discuss your
            project!
          </p>
        </div>
        <div
          style="
            width: 100%;
            height: 10vh;
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 24px;
            padding-bottom: 24px;
            background: linear-gradient(179deg, #f21e0a 0%, #d009e8 100%);
            border-radius: 100px;
            justify-content: center;
            align-items: center;
            gap: 8px;
            display: inline-flex;
          "
        >
          <div
            style="
              text-align: center;
              color: white;
              font-size: 16px;
              font-family: Poppins;
              font-weight: 500;
              line-height: 16px;
              word-wrap: break-word;
            "
          >
            See My Work
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
