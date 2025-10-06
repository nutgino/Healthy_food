import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowRight, TrendingUp, Heart, Apple } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "10 วิธีเพิ่มการเผาผลาญแคลอรี่",
      excerpt: "เทคนิคง่ายๆ ที่ช่วยเร่งการเผาผลาญให้ร่างกายทำงานได้ดีขึ้น",
      author: "นักโภชนาการหญิง",
      readTime: "5 นาที",
      category: "การลดน้ำหนัก",
      date: "2024-01-15",
      image: "🔥",
      color: "bg-red-50 border-red-200",
    },
    {
      title: "อาหารเพิ่มความจำและสมาธิ",
      excerpt: "รู้จักอาหารที่ช่วยบำรุงสมองและเพิ่มประสิทธิภาพการทำงาน",
      author: "ดร. สมชาย",
      readTime: "7 นาที", 
      category: "สุขภาพสมอง",
      date: "2024-01-12",
      image: "🧠",
      color: "bg-purple-50 border-purple-200",
    },
    {
      title: "โปรตีนจากพืช vs โปรตีนจากสัตว์",
      excerpt: "เปรียบเทียบข้อดีข้อเสียและวิธีการเลือกให้เหมาะสม",
      author: "นักโภชนาการชาย",
      readTime: "6 นาที",
      category: "โภชนาการ",
      date: "2024-01-10",
      image: "🥩",
      color: "bg-green-50 border-green-200",
    },
    {
      title: "ความจริงเรื่องน้ำตาลในผลไม้",
      excerpt: "ทำความเข้าใจเรื่องน้ำตาลธรรมชาติและสังเคราะห์",
      author: "ผู้เชี่ยวชาญโภชนาการ",
      readTime: "4 นาที",
      category: "ความรู้ทั่วไป",
      date: "2024-01-08",
      image: "🍓",
      color: "bg-pink-50 border-pink-200",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">บทความและข่าวสาร</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          อัปเดตความรู้ใหม่ๆ เกี่ยวกับโภชนาการและสุขภาพ
        </p>
      </div>

      {/* Featured Article */}
      <Card className="shadow-card bg-gradient-hero">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
              <h2 className="text-3xl font-bold text-foreground">
                ครบครัน! คู่มือการกินให้สุขภาพดี
              </h2>
              <p className="text-muted-foreground text-lg">
                เรียนรู้หลักการพื้นฐานของการรับประทานอาหารที่ส่งผลดีต่อสุขภาพ
                พร้อมเทคนิคที่นำไปปฏิบัติได้จริง
              </p>
              <Button size="lg">
                <ArrowRight className="h-4 w-4 mr-2" />
                อ่านบทความ
              </Button>
            </div>
            <div className="text-center">
              <div className="text-8xl">📚</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <Card key={index} className={`${article.color} hover:shadow-card transition-all duration-300`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="text-4xl">{article.image}</div>
                <Badge variant="secondary">{article.category}</Badge>
              </div>
              <CardTitle className="text-xl text-gray-800 leading-tight">
                {article.title}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {article.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                อ่านเพิ่มเติม
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Categories */}
      <div className="bg-muted rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">หมวดหมู่บทความ</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center space-y-2">
            <TrendingUp className="h-8 w-8 text-primary mx-auto" />
            <h3 className="font-medium">การลดน้ำหนัก</h3>
          </div>
          <div className="text-center space-y-2">
            <Heart className="h-8 w-8 text-primary mx-auto" />
            <h3 className="font-medium">สุขภาพหัวใจ</h3>
          </div>
          <div className="text-center space-y-2">
            <Apple className="h-8 w-8 text-primary mx-auto" />
            <h3 className="font-medium">อาหารสุขภาพ</h3>
          </div>
          <div className="text-center space-y-2">
            <User className="h-8 w-8 text-primary mx-auto" />
            <h3 className="font-medium">ไลฟ์สไตล์</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;