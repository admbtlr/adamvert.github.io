---
layout: default
---
<section>
# Frequently Asked Questions

## About Spryker (general)

{: .expandable}
I don’t get it, what is Spryker?

: Spryker is an e-commerce software solution providing a minimal set of features to run your webshop. The power of the system lies in a sophisticated architecture that can be used as a framework to customize the shop exactly the way you need it.

How fast is Spryker’s technology?

: The basic shop has response times of 50ms for shop browsing and 100ms for more complex operations like a cart calculation. Its speed is due to the separation of the front-end application and the back-end system. Most information needed (e.g. products and CMS data) is served by the front end and its fast KV storage; the back end is only querieed if more complex business logic is needed, like in cart calculation.

How scalable is Spryker’s technology?

: Spryker is built to handle a huge amount of visitors. The software scales horizontaly, so if you need more power, you can simply ramp up server capacity or deploy better hardware.

What makes Spryker stand out from competitors?

: Spryker represents a new approach because it focuses not on having a huge amount of configurable - not changeable - features, but on IT productivity and business flexibility.

Other shop technologies are customizable, too. How is Spryker different?

: Spryker offers a much higher degree of customizability. While other systems may be ideal for a solid online shop which requires only a few simple layout and process adjustments, Spryker is designed for clients whose business models require an agile system, allowing them to deploy new and innovative shops quickly.

What does the typical Spryker customer look like?

: The typical Spryker customer is an established company with e-commerce and specific needs proceeding from products and processes or a strategy of remaining flexible in the market by applying custom requirements. Spryker is for companies which want to grow their business and be flexible.

How large is Spryker’s core team?

: We are planning to have about 20 developers and 15-20 additional team members, working in business development and agency communications.

How is Spryker connected to Project A Ventures?

: Project A Ventures is an investor in Spryker Systems.

How is Spryker’s technology different from the software used at Project A?

: The core principles of the software are the same. The major difference is that the code is made for enterprise requirements and has a high quality standard.

## Technical components and updates

{: .expandable}
Do you need to use the BI system provided?

: All components can be removed, and this also applies to the data warehouse. If you already have a working solution, feel free to connect Zed with it.

Does Spryker provide a solution for hosting?

: Hosting is not handled by Spryker. We have a list of system requirements and we provide all the information necessary to set Spryker up, but the rest is up to you.

How does Spryker handle personalization and real-time tracking?

: Spryker’s core can handle real-time tracking by classical web tracking solutions. Customized features will be developed by the user depending on the personalization needs of specific business models.

How is the database connected to the shop system?

: The Zed system is connected with the underlying SQL database using OR-Mapper

Why does Spryker use Silex as its front-end engine?

: As a micro-framework, it is clean and easy to handle. The underlying Symfony ecosystem is widely accepted among developers, making it easy to customize and extend the capabilities of the front end as needed.

Is there a set of APIs available to connect content systems to Zed?

: Generally, we suggest that APIs are developed to a specific requirement to ensure error-free data transfers. Building this kind of customized API should be relatively easy - and clearly easier than connecting specific systems to a generic API.

Yves doesn’t use full page cache, but isn’t Yves - in a way - Zed’s full page cache?

: Yves and Zed are linked through an asynchronous connection, so that data is always up to date. Since data is never stored in Yves, the usual cold cache issues (outdated product availability, etc.) do not arise with Yves.

How is front-end tracking data integrated into the data warehouse?

: Web tracking is just another data source for the data warehouse.

Which technology is used for ETL processes in the data warehouse?

: There is no specific tool, just a set of scripts that extract, transform, and load the data into the snowflake schema. It's often faster

Do you work with third-party providers for payment, e-mail, etc.?

: Yes, we provide a set of interface implementations to work with different systems like payment providers, e-mail services, fraud prevention systems, etc.

How long will my Spryker installation remain compatible with the main system?

: Spryker contains of several feature bundles that can be seen independently, so you can update a bundle if it hasn't been changed and the connections to other bundles stay the same. Nevertheless, you'll have access to all future developments, from whcih you can pick and choose.

How do you deal with updates?

: We provide security patches for the core. All functional updates are accessible using Sprykes.

Can I update the Spryker framework when a new release is launched?

: Since the code is open to be altered and customized by each client, the full software updates are not available for existing Spryker users. Only new clients will use the new release of our software. There will, however, be releases of small feature concepts, which we call “Sprykes”. Our customers will be able to use Sprykes to create features compatible with their own Spryker version. Sprykes will deal with common technological needs, like AB-testing, on-site tracking, and mobile site implementation.


##Coding and Development

{: .expandable}
Which coding language do you use?

: We use PHP because it is easy to learn and a lot of people know how to use it.

Why did you choose PHP as a language?

: PHP allows for quick changes and is comparatively easy to hire developers for.

How long does it take to bring developers up to speed?

: An experienced developer needs only a few days to get a good feeling for the system. Based on our experience, a developer is up to speed in a few weeks.

##Implementing Spryker

{: .expandable}
How easy is it to integrate Spryker into an existing IT environment?

: Spryker is made for an easy IT environment integration. There are several connection points so that you can write the APIs you need.

What will it cost?

: Please contact us for more information about costs: we have a simple pricing model

Does is cost the same for all customers?

: Yes and no: there might be changes to the pricing due to special environments, but our aim is to keep our pricing simple

What will a small, medium and large project cost, working with Spryker and using an agency?

: It depends. Spryker provides the basic software; yhe development costs needs to be analysed separately.

Is Spryker ready to take on customers looking for a quick-to-implement solution?

: We are certainly ready to take on customers with all initial steps, suchl finding an agency and briefing the IT teams. Our system is already fully functional and will be customer-ready by March 2015.

How can an existing online shop be transferred to Spryker?

: Like in any other project, you need to build up the Spryker software to fulfill your needs and processes.

Upon purchasing a Spryker license, will I have a ready-to-run shop or do I start from scratch?

: You'll have a simple, ready-to-run shop and can start from there. The code is a great baseline for fast development, so you get pretty much everywhere pretty soon.

How many weeks' development should I expect for an e-commerce project to be shop-ready?

: It depends. Please feel free to contact us to discuss that.

How is Project A able to launch new projects within four weeks?

: Using the system’s core features with a few specific custom functions, we are able to launch a shop in just a few weeks’ time. Once order volume increases and the project gains proof of concept, we start investing time and money in optimizing the system to get every detail spot-on. This way, we can test numerous projects quickly with low overheads.

Am I able to launch an online shop internationally with Spryker?

: Yes. Our architecture provides internationalization capabilities. One single shop can use integrated features like multi-language, but most customers will want to launch separate webshops in each country. Therefore, we have developed systematics that allow developers to create one basic shop system for all countries, with the option of customizing parts of the system for each country. This minimizes development expenses, while still being able to meet individual demands.

##Agency Partnerships

{: .expandable}
Why should agencies work with Spryker?

: Because it makes an agency more flexible in meeting specific business requirements - and it makes developers much more fun to work with!

What are the requirements for agencies to work with Spryker?

: Most importantly, an agency must be able to comprehend and deploy our technology for the customer. Whether an agency has 2 or 200 employees working with the Spryker system is secondary. We will put more emphasis on finding agencies who can provide a high level of quality to ensure satisfied customers.

We are a small agency, can we become Spryker partner?

: Absolutely! Size doesn't matter. The key is to have the right people.

How many agencies are working with Spryker?

: Take a look out our list of agencies: [list of agencies](/partner)

Does it cost anything to become a Spryker partner?

: No, we will not charge agencies a partnership fee.

As an agency, do we get any support in sales?

: Sure, we're a team!

Do you provide tutorials or demos for users and agencies to get familiar with Spryker?

: Generally, we will teach developers in 1-to-2 week hands-on workshops in Berlin, but there will also be a demo webshop, which will portrait all the basic features. On top of that, we will provide documentation to help handle Spryker’s features.

Can developers access an introduction before attending the training workshop in Berlin?

: There will certainly be some kind of introduction, but we are currently focusing our efforts on the in-person workshops in Berlin.

Will agencies be able to outsource certain development tasks?

: Agencies will certainly be able to collaborate in terms of developing specific features.


##Customer Service and Support

{: .expandable}
Does Spryker provide first and second-level support?

: We do not provide a 24/7 hotline for bug fixes; that is the responsibility of the agency.

Can I call you in an emergency case?

: Spryker is highly customized, so it's best to call your implementation partner.

Who can I contact if the system is down?

: System operations is concern of the agency or your own IT-Team. We provide the software, but no worldwide 24/7 support.

What if Spryker goes bankrupt?

: We don't see that happening. Nevertheless, you will have the full access to the code base, so even if - at some point far off in time - we're not around anymore, you will still be able to use and maintain the code.

How can I end the contract?

: We don't see that happening. Just kidding! Contact us and let's talk about your contract.

##Other

{: .expandable}
As a third-party service provider, how can we work together with Spryker?

: Just call us. We're happy to work with third party providers to get even better software

</section>


<!---{::comment} Which features are included in the Spryker framework?: You can read about the feature list here: [feature list](/development/) TBD {:/comment} -->
<!--- {::comment}
If I alter the Spryker code to meet my own business needs, who owns the customized code - Spryker, the agency, or the client?

: TBD
{:/comment} -->
<!---{::comment} How many updates are planned for the Spryker core?
: TBD
How many feature updates / Sprykes will be offered annually?
: TBD {:/comment} -->
<!--- What other technologies are part of Spryker?

: Spryker uses several open source technologies. You'll find a complete list in the developer section [list of technologies](/development/) -->

<section class="faq-contact">
  [Got a question? Get in touch!](#){: .cta-light.js-contact-form}
</section>