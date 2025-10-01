const Terms = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>

      <div className="relative z-10">
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-black text-gradient mb-6">
                  TERMS OF USE
                </h1>
                <p className="text-xl text-foreground/90">
                  Last updated: July 15, 2025
                </p>
              </div>

              <div className="card-gradient rounded-3xl p-8 md:p-12 card-bottom-static border border-transparent">
                <div className="space-y-8 text-foreground/90 leading-relaxed">
                  <div className="bg-orange-900/20 border border-orange-800/30 rounded-xl p-6 mb-8">
                    <p className="text-orange-300 font-semibold text-center text-lg">
                      PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING THIS
                      SITE OR PROTOCOL.
                    </p>
                  </div>

                  <p>
                    These Terms of Use ("Terms") govern your access to and use
                    of the decentralized finance ("DeFi") application and
                    related services provided by Hastra Technologies Inc., a
                    Panamanian corporation ("Hastra", "we", "our" or "us"), a
                    wholly owned subsidiary of Hastra Protocol Foundation, a
                    Panamanian foundation.
                  </p>

                  <p>
                    By accessing or using the website https://hastra.io ("Site")
                    or interacting with any smart contracts, interfaces, or
                    decentralized applications provided through the Site
                    (collectively, the "Protocol"), you agree to be bound by
                    these Terms. If you do not agree, do not access or use the
                    Site or Protocol.
                  </p>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      1. Eligibility
                    </h2>
                    <p>
                      You must be at least 18 years of age and of legal age to
                      form a binding contract, and must not be a resident,
                      citizen, or person located in any jurisdiction subject to
                      comprehensive sanctions or where your use of the Protocol
                      would be illegal or otherwise violate applicable law or
                      subject us to registration requirements in such
                      jurisdiction. YOU EXPRESSLY AGREE THAT YOU ARE NOT A
                      CITIZEN OF OR LOCATED IN Iran, Cuba, North Korea,
                      Venezuela, Sudan, Myanmar, Regions of Crimea, Donetsk and
                      Luhansk. By using the Protocol, you represent that you
                      satisfy each of these criteria.
                    </p>
                    <p>
                      Hastra reserves the right, in its sole discretion, to
                      determine the eligibility of users for the products and
                      services provided on the Site. We may require you to
                      provide additional information or documentation to verify
                      or confirm your eligibility, including on a periodic or
                      ongoing basis. If Hastra determines that you are
                      ineligible or have breached any of your representations or
                      warranties under this section, we may block your access to
                      the Site and to any interests in property as required by
                      law.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      2. Protocol Overview
                    </h2>
                    <p>The Hastra Protocol allows users to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Connect a compatible digital wallet;</li>
                      <li>Lock up USDC (a U.S. dollar–backed stablecoin);</li>
                      <li>
                        Receive in return a Solana-based token, sPRIME,
                        representing a claim against fully collateralized assets
                        held by Hastra.
                      </li>
                    </ul>
                    <p>
                      The sPRIME token is backed 1:1 by YLDS, a yield-bearing
                      stablecoin issued by Figure and registered with the U.S.
                      Securities and Exchange Commission (SEC). Hastra holds
                      YLDS as collateral for sPRIME, but does not issue YLDS and
                      makes no representations or warranties whatsoever
                      regarding the nature, risk profile, regulatory status, or
                      performance of YLDS or any associated parties.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      2A. Yield Mechanism
                    </h3>
                    <p>
                      Holders of sPRIME may accrue yield over time, which is
                      distributed based on the underlying performance of the
                      collateralized YLDS tokens. Yield is accumulated and held
                      in a designated smart contract. Users who wish to claim
                      their yield must:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Visit the Site at https://hastra.io;</li>
                      <li>Connect their wallet holding sPRIME;</li>
                      <li>
                        Follow on-screen prompts to initiate a claim
                        transaction.
                      </li>
                    </ul>
                    <p>
                      Any claim may be subject to fees, including network gas
                      fees and a Protocol fee, which will be disclosed at the
                      time of claim. Hastra does not guarantee the amount,
                      timing, or consistency of yield distributions. Yields are
                      variable and may fluctuate based on market conditions or
                      the performance of YLDS. You acknowledge and agree that
                      you are solely responsible for monitoring and claiming
                      your eligible yield and that unclaimed yield may not
                      accrue indefinitely.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      3. No Custodial Relationship
                    </h2>
                    <p>
                      While Hastra facilitates the exchange of USDC for sPRIME
                      through its interfaces and smart contracts, Hastra does
                      not act as a custodian of user funds. Users retain full
                      control of their wallets and initiate all transactions
                      independently. You are solely responsible for securing
                      your private keys and wallet access.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      4. Blockchain-Related Risks
                    </h2>
                    <p>
                      By accessing and using the Site, you represent and warrant
                      that you understand the inherent risks associated with
                      using cryptographic and blockchain-based systems, and that
                      you have a working knowledge of the usage and intricacies
                      of digital assets. You further understand that the markets
                      for digital assets are highly volatile due to various
                      factors, including adoption, speculation, technology,
                      security, and regulation. You acknowledge and accept that
                      the cost and speed of transacting with cryptographic and
                      blockchain-based systems are variable and may increase
                      dramatically at any time. You further acknowledge and
                      accept the risk that your digital assets may lose some or
                      all of their value while they are supplied to the Protocol
                      through the interface, you may suffer loss due to the
                      fluctuation of prices of tokens in a trading pair or
                      liquidity pool, and, especially in expert modes,
                      experience significant price slippage and cost.
                    </p>
                    <p>
                      You understand that anyone can create a token, including
                      fake versions of existing tokens and tokens that falsely
                      claim to represent projects, and acknowledge and accept
                      the risk that you may mistakenly trade those or other
                      tokens. You further acknowledge that Hastra is not
                      responsible for any of these variables or risks, and
                      cannot be held liable for any resulting losses that you
                      experience while accessing or using the service.
                      Accordingly, you understand and agree to assume full
                      responsibility for all of the risks of accessing and using
                      the Site.
                    </p>
                    <p>
                      Without limiting the foregoing, you also understand that
                      there may be tax and regulatory risks related to using the
                      Site or engaging with the Protocol. It is your sole
                      responsibility to determine whether, and to what extent,
                      any taxes apply to any transactions you conduct in
                      connection with your use of the service, and to withhold,
                      collect, report and remit the correct amounts of taxes to
                      the appropriate tax authorities. Digital assets,
                      blockchain technology, and any related software and
                      services are also subject to legal and regulatory
                      uncertainty. You also understand that legislative and
                      regulatory changes or actions may adversely affect the
                      usage, transferability, transactability and accessibility
                      of digital assets, bridging, the Protocol, or other parts
                      of the Site.
                    </p>
                    <p>
                      You acknowledge that Hastra is not responsible for any
                      risks associated with your use of the Site, and cannot be
                      held liable for any resulting losses that you experience
                      while accessing or using the Site.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      5. Disclaimers
                    </h2>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      No Professional Advice and No Fiduciary Duties
                    </h3>
                    <p>
                      All information provided on the Site or otherwise provided
                      by Hastra is for informational purposes only and should
                      not be construed as professional advice. You should not
                      take, or refrain from taking, any action based on any
                      information contained on the Site. Before you make any
                      financial, legal, tax or other decisions involving the
                      Site, you should seek independent professional advice from
                      an individual who is licensed and qualified in the area
                      for which such advice would be appropriate.
                    </p>
                    <p>
                      These Terms are not intended to, and do not, create or
                      impose any fiduciary duties on Hastra. To the fullest
                      extent permitted by law, you acknowledge and agree that
                      Hastra owes no fiduciary duties or liabilities to you or
                      any other party, and that to the extent any such duties or
                      liabilities may exist at law or in equity, those duties
                      and liabilities are hereby irrevocably disclaimed, waived,
                      and eliminated. You further agree that the only duties and
                      obligations that Hastra owes you are those set out
                      expressly in these Terms.
                    </p>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      No Warranties
                    </h3>
                    <p>
                      The Site and Protocol are provided on an "AS IS" and "AS
                      AVAILABLE" basis WITHOUT WARRANTIES OR CONDITIONS OF ANY
                      KIND, EITHER EXPRESS OR IMPLIED. WITHOUT LIMITING THE
                      FOREGOING, HASTRA EXPLICITLY DISCLAIMS ANY IMPLIED
                      WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                      PURPOSE, QUIET ENJOYMENT, AND NON-INFRINGEMENT, AND ANY
                      WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF
                      TRADE. Hastra makes no warranty that the Site or Protocol
                      will meet your requirements or be available on an
                      uninterrupted, secure, or error-free basis. Hastra makes
                      no warranty regarding the quality, accuracy, timeliness,
                      truthfulness, completeness, or reliability of any
                      information or content on the Site. Any reliance you place
                      on such information or content is strictly at your own
                      risk.
                    </p>
                    <p>
                      You assume all risks associated with using the Protocol,
                      and digital assets and decentralized systems generally,
                      including, but not limited to, that digital assets are
                      highly volatile; you may not have ready access to assets;
                      and you may lose some or all of your tokens or other
                      assets. You agree that you will have no recourse against
                      Hastra or anyone else for any losses due to the use of the
                      Protocol. For example, these losses may arise from or
                      relate to:
                    </p>
                    <p>
                      (i) lost funds; (ii) server failure or data loss; (iii)
                      corrupted cryptocurrency wallet files; (iv) unauthorized
                      access; (v) errors, mistakes, or inaccuracies; or (vi)
                      third-party activities.
                    </p>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      No Endorsement or Warranty of YLDS
                    </h3>
                    <p>
                      Hastra does not endorse, guarantee, or provide any
                      assurances about YLDS, Figure, or the legal, tax, or
                      regulatory implications of holding or redeeming YLDS.
                    </p>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      No Responsibility for Third Party Websites or Resources
                    </h3>
                    <p>
                      The Site may allow you to access third party websites,
                      services, technology, applications and resources ("Third
                      Party Resources"). Hastra provides access only as a
                      convenience and is not responsible for the content,
                      products, or services, including for the accuracy,
                      availability, reliability, or completeness of information,
                      shared by or available through those Third Party
                      Resources. Your access and use of the Third Party
                      Resources may also be subject to additional terms and
                      conditions, privacy policies, or other agreements with
                      such third party. You acknowledge sole responsibility for,
                      and assume all risk arising from, your use of any Third
                      Party Resources.
                    </p>
                    <p>
                      You, and not Hastra, will be responsible for any and all
                      costs and charges associated with your use of any Third
                      Party Resources. The integration or inclusion of such
                      Third Party Resources does not constitute or imply any
                      endorsement or recommendation. Any dealings you have with
                      third parties while using the Site or Protocol are between
                      you and the third party. Hastra will not be responsible or
                      liable, directly or indirectly, for any damage or loss
                      caused or alleged to be caused by or in connection with
                      use of or reliance on any Third Party Resources.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      6. User Obligations
                    </h2>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      6.1 By using the Site, you agree that:
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        You will not use the Protocol in violation of applicable
                        laws, including sanctions laws or securities laws;
                      </li>
                      <li>
                        You will not access or use the Site to conduct, promote,
                        or otherwise facilitate any illegal activity, including
                        but not limited to money laundering and terrorist
                        financing, or encourage any other individual or entity
                        to do any of the foregoing;
                      </li>
                      <li>
                        You are solely responsible for compliance with local
                        laws and regulations;
                      </li>
                      <li>
                        You understand that your participation in any
                        distribution of sPRIME is entirely at your own risk;
                      </li>
                      <li>
                        You will not interfere with, disrupt, or harm the
                        Protocol or its users;
                      </li>
                      <li>
                        You are responsible for maintaining the confidentiality
                        of your credentials and are fully responsible for any
                        and all activities that occur under your credentials;
                      </li>
                      <li>
                        You are not currently subject to any sanctions
                        administered by OFAC or OFSI, and you will not directly
                        or indirectly use the Site to finance the activities of
                        any person currently subject to any sanctions
                        administered by OFAC or OFSI;
                      </li>
                      <li>
                        You will not use, display, mirror, or frame the Site or
                        any individual element within the Site, Site's name, any
                        of Hastra's trademark, logo or other proprietary
                        information, or the layout and design of any page or
                        form contained on a page, without Hastra's express
                        written consent;
                      </li>
                      <li>
                        You will not access, tamper with, or use non-public
                        areas of the Site, Hastra's computer systems, or the
                        technical delivery systems of Hastra's service
                        providers;
                      </li>
                      <li>
                        You will not attempt to decipher, decompile,
                        disassemble, or reverse engineer any of the software
                        used to provide the Site;
                      </li>
                      <li>
                        You will not attempt to access or search the Site or
                        download content from the Site using any engine,
                        software, tool, agent, device, or mechanism (including
                        spiders, robots, crawlers, data mining tools, or the
                        like) other than the software and/or search agents
                        provided by Hastra or other generally available
                        third-party web browsers;
                      </li>
                      <li>
                        You will not conceal your identity such as by using a
                        proxy server or by using a post box as an address for
                        the purpose of carrying out illegal, fraudulent, or
                        other prohibited activities.
                      </li>
                    </ul>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      6.2 Compliance with Sanctions
                    </h3>
                    <p>
                      By using the Site, including but not limited to
                      participating in any distribution of sPRIME, you represent
                      and warrant that you are not:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Located in, incorporated or otherwise established in, or
                        resident of, any country or territory that is the
                        subject of sanctions or embargoes imposed by the office
                        of Foreign Assets Control ("OFAC") of the U.S. Treasury
                        Department or the Office of Financial Sanctions ("OFSI")
                        of HM Treasury of the United Kingdom
                      </li>
                      <li>
                        An individual or entity, or acting on behalf of an
                        individual or entity, that is listed on any sanctions
                        list or embargoes, including but not limited to the
                        Specially Designated nationals and Blocked Persons List
                        (SDN) maintained by OFAC and the consolidated list of
                        targeted financial sanctions maintained by OFSI.
                      </li>
                      <li>
                        Otherwise blocked or denied under any OFAC or OFSI
                        sanctions program.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      7. Intellectual Property
                    </h2>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Hastra's Intellectual Property
                    </h3>
                    <p>
                      Hastra may make available through the Site content that is
                      subject to intellectual property rights. Hastra and its
                      licensors exclusively own all right, title and interest in
                      and to the Site and its Content, including all associated
                      intellectual property rights. You acknowledge that the
                      Site is protected by copyright, trademark, and other laws
                      of Panama and other jurisdictions. You agree not to
                      remove, alter, or obscure any copyright, trademark,
                      service mark, or other proprietary rights notices
                      incorporated in or accompanying the Site. The Hastra
                      Protocol Foundation name and logos and certain other logos
                      and trademarks are trademarks and service marks of Hastra
                      or its subsidiaries or affiliates (collectively the
                      "Hastra Trademarks").
                    </p>
                    <p>
                      Nothing in these Terms or in respect of the Site or
                      Protocol should be construed as granting, by implication,
                      estoppel, or otherwise, any license or right to use any of
                      the Hastra Trademarks displayed on the Site, without our
                      prior written permission in each instance. Except as
                      expressly authorized by Hastra, you agree not to modify,
                      copy, frame, scrape, rent, lease, loan, sell, distribute,
                      or create derivative works based on the Site or Content,
                      in whole or in part. Any use of the Site or Content other
                      than as specifically authorized herein is strictly
                      prohibited.
                    </p>
                    <p>
                      Other company, product, and service names and logos used
                      and displayed via the Site may be trademarks or service
                      marks of their respective owners who may or may not
                      endorse or be affiliated with or connected to Hastra.
                    </p>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Third Party Material and User Content
                    </h3>
                    <p>
                      You represent and warrant that you own all right, title
                      and interest in and to any content that you make available
                      via the Site or through the Protocol, including all
                      copyrights and rights of publicity contained therein
                      ("User Content"). You assume all risk associated with your
                      User Content and the transmission of your User Content,
                      and you have sole responsibility for the accuracy,
                      quality, legality and appropriateness of your User
                      Content.
                    </p>
                    <p>
                      Under no circumstances will Hastra be liable in any way
                      for any content or materials of any third parties
                      (including User Content), including for any errors or
                      omissions in any content, or for any loss or damage of any
                      kind incurred as a result of the use of any such content.
                      You acknowledge that Hastra does not pre-screen content,
                      but that Hastra and its designees will have the right (but
                      not the obligation) in their sole discretion to refuse or
                      remove any content that is available via the Site. Without
                      limiting the foregoing, Hastra and its designees will have
                      the right to remove from the Website, without notice, any
                      content that violates these Terms or is deemed by Hastra,
                      in its sole discretion, to be otherwise objectionable. You
                      agree that you must evaluate, and bear all risks
                      associated with, the use of any content, including any
                      reliance on the accuracy, completeness, or usefulness of
                      such content.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      8. Limitation of Liability
                    </h2>
                    <div className="bg-red-900/20 border border-red-800/30 rounded-xl p-6">
                      <p className="text-red-300 font-semibold uppercase">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER HASTRA
                        NOR ITS SERVICE PROVIDERS INVOLVED IN CREATING,
                        PRODUCING, OR DELIVERING THE SITE OR PROTOCOL WILL BE
                        LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY, OR
                        CONSEQUENTIAL DAMAGES, OR DAMAGES FOR LOST PROFITS, LOST
                        REVENUES, LOST SAVINGS, LOST BUSINESS OPPORTUNITY, LOSS
                        OF DATA OR GOODWILL, SERVICE INTERRUPTION, COMPUTER
                        DAMAGE, SYSTEM FAILURE OR THE COST OF SUBSTITUTE
                        SERVICES OF ANY KIND ARISING OUT OF OR IN CONNECTION
                        WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE
                        THE SITE OR PROTOCOL, WHETHER BASED ON WARRANTY,
                        CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT
                        LIABILITY, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT
                        HASTRA OR ITS SERVICE PROVIDERS HAVE BEEN INFORMED OF
                        THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY
                        SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS
                        ESSENTIAL PURPOSE.
                      </p>
                    </div>
                    <div className="bg-red-900/20 border border-red-800/30 rounded-xl p-6 mt-4">
                      <p className="text-red-300 font-semibold uppercase">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL
                        HASTRA'S TOTAL LIABILITY ARISING OUT OF OR IN CONNECTION
                        WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE
                        THE SITE OR PROTOCOL EXCEED ONE HUNDRED U.S. DOLLARS
                        ($100).
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      9. Indemnification
                    </h2>
                    <p>
                      You expressly agree that you assume all risks in
                      connection with your access and use of the Site. You
                      further expressly waive and release us from any and all
                      liability, claims, causes of action, or damages arising
                      from or in any way relating to your use of the Site,
                      including your interaction with the Protocol. You will
                      indemnify and hold Hastra and its officers, directors,
                      employees, and agents, harmless from and against any
                      claims, disputes, demands, liabilities, damages, losses,
                      and costs and expenses, including, without limitation,
                      reasonable legal and accounting fees arising out of or in
                      any way connected with (a) your access to or use of the
                      Site, including any interactions with the Protocol through
                      the Site, (b) your violation of these Terms, or (c) your
                      violation of any rights of another. Hastra will provide
                      notice to you of any such claim, suit, or proceeding.
                    </p>
                    <p>
                      Hastra reserves the right to assume the exclusive defense
                      and control of any matter which is subject to
                      indemnification under this section, and you agree to
                      cooperate with any reasonable requests assisting Hastra's
                      defense of such matter. You may not settle or compromise
                      any claim against Hastra, its subsidiaries or affiliates
                      without the Hastra's prior written consent.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      10. Modification and Termination
                    </h2>
                    <p>
                      We reserve the right to modify these Terms, in whole or in
                      part, at any time and at our sole discretion, by posting
                      the updated version on the Site. Your continued use of the
                      Site or Protocol after any update constitutes acceptance
                      of the new Terms. We reserve the right to suspend or
                      terminate your access to the Site or Protocol at any time,
                      with or without notice, at our sole discretion. We strive
                      to keep the Site available at all times, but access may be
                      suspended for maintenance, for protection from attacks or
                      other threats, or due to events beyond our reasonable
                      control.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      11. Governing Law and Jurisdiction
                    </h2>
                    <p>
                      These Terms shall be governed by the laws of the Republic
                      of Panama, without regard to conflicts of law principles.
                      Any disputes shall be exclusively resolved in the courts
                      of Panama City, Panama.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      12. Termination
                    </h2>
                    <p>
                      Notwithstanding anything contained in these Terms, Hastra
                      may suspend, modify or terminate your access to and use of
                      the Site and/or Protocol at its sole discretion, at any
                      time and without notice to you. You may disconnect your
                      digital wallet at any time. You acknowledge and agree that
                      Hastra shall have no liability or obligation to you in
                      such an event and that you will not be entitled to a
                      refund of any amounts that you have already paid to Hastra
                      or any third party, to the fullest extent permitted by
                      applicable law.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      13. Miscellaneous
                    </h2>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Entire Agreement
                    </h3>
                    <p>
                      These Terms constitute the entire and exclusive
                      understanding and agreement between Hastra and you
                      regarding the Site, and these Terms supersede and replace
                      all prior oral or written understandings or agreements
                      between Hastra and you regarding the Site.
                    </p>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Severability
                    </h3>
                    <p>
                      If any provision of these Terms is held invalid or
                      unenforceable by a court of competent jurisdiction, that
                      provision will be enforced to the maximum extent
                      permissible and the other provisions of these Terms will
                      remain in full force and effect.
                    </p>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Assignment
                    </h3>
                    <p>
                      Except where provided by applicable law in your
                      jurisdiction, you may not assign or transfer these Terms,
                      by operation of law or otherwise, without Hastra's prior
                      written consent. Any attempt by you to assign or transfer
                      these Terms absent Hastra's consent or your statutory
                      right without such consent will be null. Hastra may freely
                      assign or transfer these Terms without restriction.
                      Subject to the foregoing, these Terms will bind and inure
                      to the benefit of the parties, their successors, and
                      permitted assigns.
                    </p>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Electronic Communications, Transactions, and Signatures
                    </h3>
                    <p>
                      You agree that we may communicate with you electronically.
                      Such electronic communications may consist of e-mail,
                      notices posted on the Site, forms you complete online, and
                      other communications via any other electronic medium (or
                      social media). For example, we may send emails to you that
                      contain newsletters, information about campaigns, offers,
                      surveys, and other communications. You agree that all
                      agreements, notices, disclosures, and other communications
                      we send to you electronically will satisfy any requirement
                      that such communication be in writing. YOU HEREBY AGREE TO
                      THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND
                      OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES,
                      POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR
                      COMPLETED BY US OR VIA THE SITE. You hereby waive any
                      rights or requirements under any statutes, regulations,
                      rules, ordinances, or other laws in any jurisdiction which
                      require an original signature or delivery or retention of
                      non-electronic records, or to payments or the granting of
                      credits by any means other than electronic means.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      14. Contact
                    </h2>
                    <p>
                      For questions about these Terms, contact:{" "}
                      <a
                        href="mailto:legal@hastra.io"
                        className="text-foreground hover:text-foreground/80 transition-colors underline"
                      >
                        legal@hastra.io
                      </a>
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Terms;
