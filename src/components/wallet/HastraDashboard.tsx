import {useWallet} from '@/contexts/WalletContext';
import WalletOverview from './WalletOverview';
import BuyCard from './BuyCard';
import SendCard from './SendCard';
import TradingPlatformsSection from '../start-earning/TradingPlatformsSection';
import StakingSection from '../staking/StakingSection';
import {useTokenPortfolio} from "@/hooks/useTokenPortfolio.ts";
import {useOfac} from "@/hooks/use-ofac.ts";
import {useEffect, useState} from "react";
import {Progress} from "@/components/ui/progress.tsx";

const HastraDashboard = () => {
    const {
        isConnected, address
    } = useWallet();
    const {
        tokens
    } = useTokenPortfolio();

    const {
        isLoading: ofacLoading,
        data: ofac,
        error: ofacError
    } = useOfac(address);

    const [ofacProgressValue, setOfacProgressValue] = useState<number>(0);

    useEffect(() => {
        if (ofacLoading) {
            setOfacProgressValue(0);
            const interval = setInterval(() => {
                setOfacProgressValue((prev) => (prev < 95 ? prev + 5 : prev));
            }, 500);
            return () => clearInterval(interval);
        } else {
            setOfacProgressValue(100);
        }
    }, [ofacLoading]);

    const ofacPass = () => {
        return !ofacError && ofac && ofac.Score > 10
    }
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - 100; // Offset to keep title visible

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    if (!isConnected) {
        return null;
    }

    return <div className="w-full">
        {/* Header */}
        <div className="mb-6 md:mb-8 text-center">
            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed"
               style={{
                   textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)'
               }}>
                Your decentralized finance command center
            </p>
        </div>

        {/* Portfolio Overview Section */}
        <div className="mb-8 md:mb-12 relative">
            <WalletOverview/>
            <h2 className="absolute top-6 left-6 text-lg md:text-xl font-semibold text-foreground z-10">
                Portfolio Overview
            </h2>
        </div>


        {/* Buy and Send Interfaces */}
        {ofacLoading && (
            <div className="flex items-center justify-center gap-3 mb-4">
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary"></div>
                <span className="text-base font-medium text-foreground">OFAC in Progress</span>
            </div>
        )}
        {ofacPass() && tokens && tokens.length > 0 &&
            <div id="buy-send-section" className="mb-8 md:mb-12">
                <div id="buy-send-section" className="mb-8 md:mb-12 relative">
                    {ofacLoading && (
                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 z-20">
                            <div
                                className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary mb-4"></div>
                            <h1
                                className="text-lg font-medium text-foreground">Checking OFAC Compliance</h1>
                        </div>
                    )}
                    <div
                        className="card-gradient rounded-3xl border border-border/30 shadow-lg p-6 md:p-12">
                        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-6 md:mb-8">Buy
                            & Send</h2>
                        <div
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                            <BuyCard/>
                            <SendCard/>
                        </div>
                    </div>
                </div>

            </div>}

        {/* Staking Section */}
        {ofacPass() &&
            <StakingSection/>
        }

        {!ofacLoading && !ofacPass() && (
            <div className="mb-8 md:mb-12">
                <div className="card-gradient rounded-3xl border border-border/30 shadow-lg p-6 md:p-12 max-w-3xl mx-auto text-center">
                    <h2 className="text-lg font-semibold mb-2">Trading is Disabled</h2>
                    <p className="text-base text-foreground mb-4">
                        Your account did not pass the OFAC compliance check.
                    </p>
                </div>
            </div>
        )}

        {/* Trading Platforms Section */}
        <div id="trade-lend-section" className="mb-8 md:mb-12">
            <div
                className="card-gradient rounded-3xl border border-border/30 shadow-lg p-6 md:p-12">
                <TradingPlatformsSection/>
            </div>
        </div>

        {/* Additional Info */}
        <div className="text-center text-muted-foreground">
            <p className="text-sm">
                Always verify transactions before confirming
            </p>
        </div>
    </div>;
};
export default HastraDashboard;
