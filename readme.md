# Milestone Project 2 - Bespoke Project to Demonstrate Use of Dashboards and Working with External APIs
https://jaypeaa.github.io/milestone2/


The project concept is from the perspective of a Technology Company ("Best Analytics") who produces dashboards and provides web design 
services. The main feature of the site is the dashboard which utilises D3, Crossfilter and DC.js. The data used is a dummy dataset for two 
franchises "New You" and "Fresh Look". It incorporates several interactive charts, a data count and a data table. The 'Consolidated Sales 
Chart' includes a brush feature to easily select different time periods.

## UX

The project has been designed with the end user in mind. The end user being businesses predominantly who wish to utilise MI generated by 
their business graphically on a company website or as part of an independent dashboard. This might be to drive stakeholder engagement using 
an interactive charting tool. 

To enhance the user experience a more modern one-page theme has been designed. It utilises the HTML scroll feature and jQuery to scroll to 
various sections of the website. As the user scrolls up & down the page the nav bar highlights the current section being viewed.

A preloader has been included in the dashboard section to notify the user that data is loading.  Various elements have also been faded out 
on loading the page which fade back in to view slowly when loading is complete. jQuery was used for this purpose.  Another aspect of the site is that when being viewed in portrait view on a mobile device an image is displayed instructing the user to rotate the device to landscape in order to view the dashboard.

To prevent poor user experience when viewing the dashboard section of the site in portrait mode on mobile devices a place holder is displayed. 
This communicates to the user the need to rotate the device to landscape view in order to view the dashboard.

The flow of the site has been created in a more modern one-page layout.  Square edges and subtle use of shadow have been applied in order to 
make the various sections stand out.

A large 'call to action' button (Contact Us) has been placed in the header of the home screen. This call to action button occupies prime real 
estate in order to drive customer enquiries and contains a hover effect to improve the 'click through rate' and increase customer enquiries 
which would lead to sales. This aspect of the site recognises its commercial nature whilst enhancing the user experience by making it easy to 
get in touch within a couple of clicks.

A user may wish to perform the following actions:


* utilise the example dashboard.
* understand how the graphs and data table interact with each other through experimentation.
* contact us via the contact form to arrange a consultation.
* contact us more traditional means (post/phone/email).
* reach out to us on social media.


The site provides all these options to the end user and is very easy to utilise and navigate.

Wireframes for this project are available here https://github.com/JayPeaa/milestone2/blob/master/wire-frames.pdf

# Features

The main features of the site are:

* Clear and Easy to Use Navigation
* Interactive Dashboard
* APIs - Google Maps, MailJS
* Email subscription 
* Contact Form
* Social Media for marketing and engagement purposes

## Future development

The sample dataset includes customer information it would be possible to create additional charts to analyse customer behaviour and spend.

A secure log in section and online purchase options for potential customers would also be a valuable addition (e-commerce aspect). 

Some additional work with AJAX and jQuery would help to provide an even more immersive customer experience when submitting contact forms. 

Another development would be the inclusion of a database for email subscription as currently when a user submits an email via the subscription 
section an email is triggered as opposed to simply adding the user to a mailing list as part of a more automated process. 

Integration of a blog would be a prerequisite for this type of site in order to generate greater volumes of organic traffic.  Google Analytics 
should also be integrated to understand the numbers of visitors and their sources to better track the sites performance.  

The site includes the Google Maps API which could be integrated more fully with Google Business to leverage some of the free yet powerful 
options provided by Google and make the site more discoverable by search engines.

# Technologies

The site is built using HTML, CSS, jQuery, Bootstrap, D3.js, Crossfilter, DC.js, and JavaScript based technologies and Libraries. Usage of any 
libraries or CDNs is documented below:

* CDN Usages

The following CDNs have been used to create this site.

https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css
https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css
https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js

* Libraries

https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"
https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js
d3.min.js
crossfilter.min.js
dc.min.js
queue.min.js
graph.js

# Testing

To ensure any links were entered correctly it was common practice to consol.log a simple 'hello' to the console prior to commencing coding.

Testing has been conducted using google dev tools. Thorough testing in all the various mobile devices along with general responsiveness 
(responsive mode) has concluded that this site works well in all modern-day browsers and mobile devices. As part of the testing process each 
page has been reviewed systematically to ensure all links work as intended and the pages display correctly.

This testing has confirmed that users will be able to utilise the site as intended on any device (in landscape or portrait mode) to achieve 
their goals whilst enjoying the experience and customer journey.

All user forms display correctly and as intended on various displays / devices.

Autoprefixer was used to ensure CSS is compatible in multiple browsers: https://autoprefixer.github.io/

A common approach to testing code was to print to the console. This was particularly useful for testing conditions prior to adding additional 
code and for viewing variable or array values.

# Browser Compatibility Testing:

### Issues Encountered

Time was invested at the start of the project to ensure HTML code and Bootstrap Classes were working as anticipated which saved some time on 
responsiveness testing during the latter stages of the build.  One of the bootstrap defaults in my navbar was creating overflow Y so it was 
necessary to override the bootstrap style with custom CSS.  On occasion this meant using ‘!Important’ to achieve this.  

HTML and CSS Validators were used to clear any errors, however, CSS validation tends to highlight browser extensions as errors when they are 
actually required.  

One issue encountered was with the brush effect on the 'Consolidated Sales' line graph. This issue appears to be intermittent and an issue 
with chrome rather than the underlying code.  In order to investigate this the site was tested on other machines and browsers and in certain 
instances it was not possible to recreate the issue. That said this issue does not appear to impact the sites ability to function as intended.  

Issues were encountered with the forms default reload behaviour which conflicted with the one page design. The following custom jQuery was 
written to prevent these issues:

$("form").on("submit", function(event) { event.preventDefault(); })

Some minor modifications were made to the layout of my design post wireframing which 
were straightforward to implement. This was done in order to achieve more balance visually.

It was necessary to take a different approach with regards the one page scrolling.  Initially a combination of jQuery and CSS ('HTML Scroll 
Property') were utilised. It became clear during testing that this did not work on all browsers. The CSS HTML Scroll property has been removed and this animation
effect is also handled by jQuery.

# Deployment

Throughout the projects regular git commits were made to ensure any working files were backed up. Numerous commits have been logged on the main branch in GitHub. The project has been successfully deployed on GitHub pages.  
There is only one main branch in GitHub for this project.

AWS cloud9 has been used throughout this project as the IDE of choice.  

GitHub Pages Address: https://jaypeaa.github.io/milestone2/

# File Structure

The project has been organised in the following structure:

* milestone2 (Project Folder)
* assets (folder)
    * css (folder)
    * data (folder)
    * davicon
    * js (folder)
    * vendor (folder)
        * images (folder)
        * video (folder)
   

Index.html and Readme.md are both located in the main project folder as are the wireframes for the initial design.

The vendor folder contains any 3rd party assets such as photos, video and audio materials for which proper approval has been attained prior to use.

# Credits

The favicon was generated by a 3rd party site: https://favicon.io/favicon-generator/. 


# Images and Media

All images and media used on this site have been labelled for reuse / non-commercial and are for educational purposes only.  Google images 
licensing tools have been utilised in sourcing content.  Express consent has been attained via email for any other 3rd party content namely the video.