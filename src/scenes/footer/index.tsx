import Logo from '@/assets/Logo.png';
const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-6 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="logo" />
                    <p className="my-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Assumenda tempora vitae quae magni voluptas beatae
                        dicta at harum repellat ullam eius quos, reiciendis
                        consequuntur minus nulla facere id mollitia maxime!
                    </p>
                    <p>© Evogym All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="my-5">Links</h4>
                    <p className="my-5">Massa orci senectus</p>
                    <p className="my-5">Et gravida id et etiam</p>
                    <p>Ullamcorper vivamus</p>
                </div>
                <div>
                    <h4 className="my-5">Contact Us</h4>
                    <p className="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error, veritatis.
                    </p>
                    <p>(333)425-6825</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
