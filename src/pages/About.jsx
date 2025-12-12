
import Section from '../components/reusable/Section';
import Text from '../components/reusable/Text';
import Button from '../components/reusable/Button';

export default function About() {
    return (
        <Section className="min-h-screen flex items-center">
            <main class="container mx-auto px-4 py-12">
                <div class="max-w-4xl mx-auto text-center">
                    <Text className="text-5xl font-bold mb-12" animate={true}>
                        About Our Vision
                    </Text>
                    
                    <div class="space-y-8">
                        <Text className="text-xl leading-relaxed" animate={true}>
                            We are a passionate team dedicated to creating amazing experiences for our users.
                        </Text>
                        
                        <div class="mt-12">
                            <Text as="h2" className="text-3xl font-bold mb-6" animate={true}>
                                Our Story
                            </Text>
                            <Text className="text-lg leading-relaxed" animate={true}>
                                Founded in 2025, we've been on a journey to revolutionize the way people interact with technology.
                                Our mission is to build innovative solutions that make a real difference in people's lives.
                            </Text>
                        </div>
                        
                        <div class="mt-12">
                            <Button 
                                className="px-8 py-3 text-lg font-medium"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                animate={true}
                            >
                                Back to Top
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </Section>
    );
}