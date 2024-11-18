import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white p-4 mt-10">
      <section className="grid md:grid-cols-2  px-4
           text-center 
      items-center
      
      cursor-pointer ">
        <div>
          <h2 className="text-xl font-semibold text-orange-300">Contact information</h2>
          <div>
            <p>Number : 014*******</p>
            <p>Hotline : 2348934</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-orange-300">social media </h2>
          <div>
            <p>
              Facebook : <i class="ri-facebook-fill"></i>{" "}
            </p>

            <p>
              Twiter : <i class="ri-twitter-fill"></i>
            </p>

            <p>
              Telegrame : <i class="ri-telegram-2-fill"></i>
            </p>

            <p>
              Github : <i class="ri-github-fill"></i>
            </p>
          </div>
        </div>
      </section>
      <footer class="footer footer-center bg-base-300 text-base-content p-4 rounded-md  mt-10">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Sakib
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
