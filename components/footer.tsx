import Link from "@/components/custom-link";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="px-4">
            <div className="mx-auto max-w-7xl flex items-center justify-between py-4">
                <p className="text-muted-foreground">
                    &copy; {new Date().getFullYear()} OpenSaaSKit. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <Link
                        href="https://github.com/shenlu89/nextjs-auth-payment-boilerplate"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub className="h-5 w-5" />
                    </Link>
                    <Link
                        href="https://x.com/shenlu89"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Twitter"
                    >
                        <FaTwitter className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
