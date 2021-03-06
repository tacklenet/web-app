import Link from 'next/link';

export default function Faq() {
  return (
    <>
      <div className='bg-white'>
        <div className='pt-12 max-w-7xl mx-auto pb-16 px-4 divide-y-2 divide-gray-200 sm:pb-24 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900'>About Tackle.net</h2>
          <div className='mt-6 pt-10'>
            <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12'>
              <div>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  🌐 Community & Resources
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  Made by bait makers for bait makers. The goal of Tackle.net is
                  to help empower the bait making community. We are here to help
                  each other reach their full potential. This web app is just
                  part of the network. Find us on Discord & Instagram (links in
                  the footer).
                </dd>
              </div>
              <div>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  🚀 Marketing & SEO Optimization
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  While Instagram is a great place to share your lures, it’s
                  often buried and isolated within the walled confines of FB.
                  Tackle.net exposes your brand & lures to a new audience with
                  just a few simple clicks on a search engine friendly platform
                  built on an unbeatable domain.
                </dd>
              </div>
              <div>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  🔥 How do I post, edit and delete my lures?
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  Posting lures is currently open to everyone during beta
                  testing. To modify a post just repost it. For deleting a lure,
                  contact @tacklenet with link(s). After your first post, we'll
                  create a{' '}
                  <Link href='/makers'>
                    <a
                      className='hover:text-gray-800 underline'
                      target='_blank'>
                      Maker
                    </a>
                  </Link>{' '}
                  page with your IG details, ie: tackle.net/username. Every link
                  is shareable, so share away!
                </dd>
              </div>
              <div>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  👐 Free & Open Source
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  The source code to this web app is available on{' '}
                  <a
                    className='hover:text-gray-800 underline'
                    href='https://github.com/tacklenet'
                    target='_blank'>
                    Github
                  </a>{' '}
                  and available for anyone to contribute. The goal is to promote
                  an open community that is accessible to everyone. Let’s grow
                  this together!
                </dd>
              </div>
              <div>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  ♾️ Tackle Network
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  Tackle.net will morph over time. The goal is to eventually
                  reach a point where the organization becomes a{' '}
                  <a
                    className='hover:text-gray-800 underline'
                    href='https://aragon.org/dao'
                    target='_blank'>
                    DAO
                  </a>{' '}
                  (decentralized autonomous organization) running off a token
                  with a governance & incentive structure. Hint: Tackle Token
                  (TKL) 🤫
                </dd>
              </div>
              <div>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  🌱 Kickstart a Project
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  Have a unique lure project you’re looking to make but short on
                  resources? Reach out{' '}
                  <a
                    className='hover:text-gray-800 underline'
                    href='https://instagram.com/tacklenet'
                    target='_blank'>
                    @tacklenet
                  </a>
                  . We’ll see how we can help. Bringing new lures to market is
                  fun & rewarding
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
