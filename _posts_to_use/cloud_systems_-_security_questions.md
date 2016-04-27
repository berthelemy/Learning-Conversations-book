# Cloud systems - security questions {#cloud-systems-security-questions}

_Date posted: 6 October 2011_

Both [Donald Clark](http://donaldclarkplanb.blogspot.com/2011/10/7-reasons-to-put-heads-in-cloud-based-e.html) and [Kate Graham](http://kategraham23.wordpress.com/2011/10/05/exploring-live-online-learning-and-cloud-technologies/) have recently identified some resistance to moving towards cloud-based software. The advantages, as outlined by Donald, are compelling, but there's a huge question around security. When you put software inside your firewall, you take responsibility for its security and the data stored within it. How do you know that the cloud-software companies work to the same standards as you? The good news is that most of them will probably have higher standards. For example, is it better to store personal data about school-children in a server cupboard inside a school building, or in a purpose-built data centre, with multi-layered physical and logical security and redundant systems? The bad news is that you are still the responsible party. You will have to undertake enough due diligence on your suppliers to be able to show that you'd done everything you could to protect your data and your organisation's reputation. It's your job on the line, not the software provider's. Some software companies are extremely helpful in this respect. They publish full descriptions of how they address security concerns, at a software level, at server level, at network level and at datacentre level. Salesforce is a particularly good example of this practice. Their site at http://trust.salesforce.com/trust/security/ provides detailed information under a number of key headings. I've adapted these below and suggested what cloud software providers should describe at a bare minimum:

*   Data centre

1.  Where are the data centres located? (This is particularly true if you are in the UK and subject to the Data Protection Act)
2.  How do you control access to the data centre and prevent physical attacks
3.  How do you control the environmental around the servers - temperature and humidity in particular?
4.  How do you ensure that power is maintained to the facility, even when the power network is down?
5.  How do you ensure that high bandwidth internet connections can be maintained?
6.  How do you detect and suppress fire?

*   How do you ensure that network traffic is encrypted securely and is from known users?
*   What layers of protection are in place for your network, eg. firewalls, intrusion detection, anti-virus?
*   What do you do to ensure that service is maintained even when a data centre or a server goes offline?
*   How do you ensure that data can be recovered even if all your systems go down?
*   What do you do to make sure your code isn't vulnerable to attack? (See the [OWASP list of top 10 vulnerabilities](https://www.owasp.org/index.php/Top_10_2010-Main))?
*   How do test your systems?
*   How do you monitor your systems?

Now, it may be that you're a small business or organisation, and the risk to you of losing some of your data is outweighed by the cost of dealing with an organisation that has all these systems in place. But, I would argue, that, as soon as you enter confidential or personal information onto a system, you need to start thinking about these questions - regardless of how big you are. This will probably be difficult for the smaller hosting providers, who have created a market in hosting open-source software like Moodle and SugarCRM. But they still need to consider the questions and have sensible answers about the level of risk that they are putting you under. Any provider of cloud-software that doesn't explicitly address security somewhere on their website needs to think again. And anyone who is procuring such services needs to consider carefully the level of risk they are prepared to accept. Other examples of security statements include:

*   [SurveyMonkey](http://www.surveymonkey.com/Monkey_Security.aspx)
*   [SurveyGizmo](http://www.surveygizmo.com/security/)
*   [Kashflow](http://www.kashflow.com/security.asp)

As you'll see, they have different amounts of information available - but at least they've addressed the questions - showing that they understand the issue. [Update: Of course, if your internal IT people are hosting software that is accessible on the internet, like cloud software, then you'll need to ask them the same questions...]