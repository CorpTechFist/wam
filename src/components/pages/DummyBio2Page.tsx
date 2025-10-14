import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowLeft, Mail, Phone, Linkedin, Calendar, Award, MapPin } from "lucide-react";
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface DummyBio2PageProps {
  onNavigate?: (page: string) => void;
}

export function DummyBio2Page({ onNavigate }: DummyBio2PageProps) {
  const handleBackClick = () => {
    if (onNavigate) {
      onNavigate('board-of-directors');
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Animated gradient background matching About Us page */}
      <div 
        className="fixed inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, rgba(245, 246, 247, 0.85) 0%, rgba(240, 229, 252, 0.7) 50%, rgba(245, 246, 247, 0.85) 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite'
        }}
      />
      
      {/* Hero Section */}
      <section className="relative pt-128 pb-64">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <button
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 mb-32 px-16 py-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 hover:bg-white/30 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Board of Directors
          </button>

          <div className="max-w-4xl mx-auto">
            <div className="glass-morphism glass-shine rounded-3xl p-32 md:p-48">
              <div className="grid md:grid-cols-3 gap-32 items-start">
                {/* Profile Image */}
                <div className="md:col-span-1">
                  <div className="relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
                      alt="Sarah Martinez"
                      className="w-full h-320 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  </div>
                </div>

                {/* Basic Info */}
                <div className="md:col-span-2">
                  <div className="mb-24">
                    <h1 className="text-4xl md:text-5xl gradient-text mb-12">
                      Sarah Martinez
                    </h1>
                    <div className="flex flex-wrap gap-12 mb-16">
                      <Badge className="bg-purple-100 text-purple-800 px-16 py-8">
                        Board Member
                      </Badge>
                      <Badge className="bg-yellow-100 text-yellow-800 px-16 py-8">
                        Community Advocacy
                      </Badge>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed mb-24">
                      Sarah Martinez brings extensive experience in community advocacy and program development to the WAM Alliance board. Her dedication to grassroots organizing and inclusive programming has strengthened our community partnerships and expanded our reach.
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div className="flex items-center gap-12 text-gray-600">
                      <Mail className="w-5 h-5 text-purple-600" />
                      <span>s.martinez@wamalliance.org</span>
                    </div>
                    <div className="flex items-center gap-12 text-gray-600">
                      <Phone className="w-5 h-5 text-purple-600" />
                      <span>(555) 987-6543</span>
                    </div>
                    <div className="flex items-center gap-12 text-gray-600">
                      <Linkedin className="w-5 h-5 text-purple-600" />
                      <span>linkedin.com/in/sarahmartinez</span>
                    </div>
                    <div className="flex items-center gap-12 text-gray-600">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span>Chicago, IL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Experience */}
              <Card className="glass-morphism glass-shine rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-6 h-6 text-purple-600" />
                    <h3 className="text-2xl font-bold" style={{color: '#581c87'}}>Professional Experience</h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Director of Community Programs</h4>
                      <p className="text-purple-600 font-medium mb-2">Community Action Network (2019-Present)</p>
                      <p className="text-gray-600 text-sm">Leading community-based programs focused on housing advocacy, food security, and social services for underserved populations.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Outreach Coordinator</h4>
                      <p className="text-purple-600 font-medium mb-2">Neighborhood Alliance Initiative (2016-2019)</p>
                      <p className="text-gray-600 text-sm">Developed and implemented outreach strategies to engage diverse communities in advocacy and program participation.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Program Specialist</h4>
                      <p className="text-purple-600 font-medium mb-2">City of Chicago Community Services (2013-2016)</p>
                      <p className="text-gray-600 text-sm">Coordinated social service programs and volunteer initiatives across multiple city districts.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Education & Achievements */}
              <Card className="glass-morphism glass-shine rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-6 h-6 text-purple-600" />
                    <h3 className="text-2xl font-bold" style={{color: '#581c87'}}>Education & Achievements</h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Master of Social Work</h4>
                      <p className="text-purple-600 font-medium mb-2">University of Illinois at Chicago (2013)</p>
                      <p className="text-gray-600 text-sm">Specialized in community organizing and policy advocacy with focus on equitable access to resources.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Bachelor of Arts in Sociology</h4>
                      <p className="text-purple-600 font-medium mb-2">DePaul University (2011)</p>
                      <p className="text-gray-600 text-sm">Graduated with honors, focusing on urban sociology and community development studies.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Certifications</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>• Certified Community Development Professional</p>
                        <p>• Nonprofit Leadership Certificate</p>
                        <p>• Diversity & Inclusion Training Facilitator</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WAM Alliance Contributions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-morphism glass-shine rounded-2xl">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-8 text-center" style={{color: '#581c87'}}>
                  Contributions to WAM Alliance
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-3">Program Innovation</h4>
                    <p className="text-gray-600 text-sm">Developed new community engagement programs that increased participant involvement by 60% in the first year.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-3">Partnership Building</h4>
                    <p className="text-gray-600 text-sm">Established collaborative relationships with over 25 community organizations to enhance service delivery.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-3">Advocacy Leadership</h4>
                    <p className="text-gray-600 text-sm">Led advocacy campaigns that resulted in improved policy outcomes for marginalized communities.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Personal Statement */}
      <section className="py-16 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-morphism glass-shine rounded-2xl">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-6 text-center" style={{color: '#581c87'}}>
                  Personal Statement
                </h3>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    "Being part of the WAM Alliance board represents an opportunity to amplify the voices of those who are often unheard in our communities. My passion for advocacy stems from witnessing firsthand the transformative power of inclusive, community-driven initiatives."
                  </p>
                  <p>
                    "I believe that true community development happens when we center the experiences and needs of those we serve. At WAM Alliance, this philosophy is not just a value – it's the foundation of everything we do."
                  </p>
                  <p>
                    "My commitment to this organization is rooted in the belief that when communities come together with shared purpose and mutual respect, meaningful and lasting change becomes possible. We all matter, and together we can build a more equitable future."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
