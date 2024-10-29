const primary_sidebar_links = [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Product Category", url: "/product-category" },
    { name: "Contribution Community", url: "/contribution-community" },
    { name: "Discuss", url: "/discuss" },
    { name: "Challenges", url: "/challenges" },
    { name: "Jobs", url: "/jobs" },
    { name: "Resume", url: "/resume" },
    { name: "Recruiters", url: "/recruiters" },
    { name: "Projects", url: "/projects" },
    { name: "User Profiles", url: "/user-profiles" },
    { name: "Pro Subscriptions", url: "/pro-subscriptions" },
    { name: "Notifications", url: "/notifications" },
    { name: "Certifications", url: "/certifications" },
    { name: "Wallet", url: "/wallet" },
    { name: "Support Requests", url: "/support-requests" },
    { name: "Log History", url: "/log-history" },
    { name: "Vouchers", url: "/vouchers" },
    { name: "Panel Settings", url: "/panel-settings" },
  ];
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){},{}],4:[function(require,module,exports){
    
    document.addEventListener("DOMContentLoaded", () => {
      //  const primary_sidebar = document.querySelector("aside.sidebar");
      const primary_sidebar = document.getElementById("ps");
    
      // Switch page function for primary sidebar
      const switchPage = ({ url, elem }) => {
        window.location.href = url;
        // removing selected className from old button
        primary_sidebar.childNodes.forEach((node) => {
          if (node.classList && node.classList.contains("selected"))
            node.classList.remove("selected");
        });
        // adding className to new button
        elem.classList.add("selected");
      };
    
      // adding selected className to the btn having url prop matching to the pathname
      const highlightBtn = ({ url, elem }) => {
        const path = window.location.pathname;
        if (path === url) elem.classList.add("selected");
      };
    
      // Primary sidebar construction
      primary_sidebar_links.map((link) => {
        const elem = document.createElement("button");
        elem.classList.add("button");
        const textNode = document.createTextNode(link.name);
        elem.appendChild(textNode);
        primary_sidebar.appendChild(elem);
        // highlight button based on the path
        highlightBtn({ url: link.url, elem });
        elem.onclick = () => switchPage({ url: link.url, elem });
      });
    
    });
    
    },,{}]},{},[4]);
    