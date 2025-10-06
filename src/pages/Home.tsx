import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Calculator, Apple, BookOpen, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/nutrition-hero.jpg";

const Home = () => {
  const features = [
    {
      icon: Calculator,
      title: "Health Calculators",
      description: "BMI, BMR และเครื่องคำนวณแคลอรี่จากกิจกรรมต่างๆ",
      link: "/tools",
    },
    {
      icon: Apple,
      title: "Healthy Foods Guide",
      description: "รู้จักอาหารสุขภาพ 20 อย่างพร้อมสารอาหารที่ดีต่อร่างกาย",
      link: "/healthy-foods",
    },
    {
      icon: BookOpen,
      title: "Nutrition Info",
      description: "ข้อมูลโภชนาการพื้นฐานที่จำเป็นต่อการดูแลสุขภาพ",
      link: "/nutrition-info",
    },
    {
      icon: Users,
      title: "Nutrition by Age",
      description: "คำแนะนำโภชนาการตามช่วงวัยและภาวะสุขภาพ",
      link: "/nutrition-guide",
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                  <Heart className="h-4 w-4 mr-2" />
                  Your Health Partner
                </div>
                <h1 className="text-5xl font-bold text-foreground leading-tight">
                  เริ่มต้น<span className="text-primary">ชีวิตสุขภาพดี</span><br />
                  ด้วยโภชนาการที่ถูกต้อง
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  ค้นพบข้อมูลโภชนาการที่ครบถ้วน เครื่องมือคำนวณสุขภาพ 
                  และคำแนะนำการกินที่เหมาะกับคุณ
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 py-3" asChild>
                  <Link to="/tools">
                    <Calculator className="h-5 w-5 mr-2" />
                    เริ่มใช้เครื่องมือสุขภาพ
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3" asChild>
                  <Link to="/nutrition-info">
                    <BookOpen className="h-5 w-5 mr-2" />
                    เรียนรู้โภชนาการ
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:pl-8">
              <img
                src={heroImage}
                alt="Fresh healthy foods including vegetables and fruits"
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            เครื่องมือและข้อมูลที่คุณต้องการ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ทุกสิ่งที่จำเป็นสำหรับการดูแลสุขภาพและโภชนาการในที่เดียว
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="group hover:shadow-card transition-all duration-300 border-border">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-primary/10 rounded-xl w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
                <Button variant="outline" size="sm" asChild>
                  <Link to={feature.link}>เรียนรู้เพิ่มเติม</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-gradient-health rounded-3xl p-16 text-white">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold">
              เริ่มต้นเส้นทางสุขภาพดีวันนี้
            </h2>
            <p className="text-xl opacity-90">
              ใช้เครื่องมือคำนวณ BMI, BMR และแคลอรี่ ค้นหาอาหารที่เหมาะกับคุณ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3" asChild>
                <Link to="/bmi-bmr">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  คำนวณ BMI & BMR
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 border-white text-black hover:bg-white hover:text-primary" asChild>
                <Link to="/healthy-foods">
                  <Apple className="h-5 w-5 mr-2" />
                  ดูอาหารสุขภาพ
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;