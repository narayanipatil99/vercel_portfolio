"use client"
import { X, Download, Calendar, Briefcase, GraduationCap, FileText, Code, Database } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <div
              className="bg-card border border-primary/20 rounded-lg shadow-lg w-[90%] max-w-4xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-card border-b border-border z-10 flex justify-between items-center p-4">
                <h2 className="text-xl font-bold">Narayani Patil - Resume</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1 border-primary/30">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                  <Button variant="ghost" size="icon" onClick={onClose}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="p-6 space-y-8">
                {/* Header */}
                <div className="text-center space-y-2">
                  <h1 className="text-3xl font-bold">Narayani Patil</h1>
                  <p className="text-muted-foreground">Data Engineer & ML Enthusiast</p>
                  <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
                    <span>Boston, MA</span>
                    <span>•</span>
                    <span>patil.nar@northeastern.edu</span>
                    <span>•</span>
                    <span>+1-857-334-1280</span>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h2 className="text-xl font-semibold mb-2 pb-1 border-b border-border">Professional Summary</h2>
                  <p className="text-foreground/90">
                    Data Engineer and Computer Engineering graduate student with expertise in designing and implementing
                    data pipelines, ETL processes, and analytics solutions. Skilled in Python, SQL, big data
                    technologies, and machine learning with professional experience at Natixis Investment Managers and
                    Deloitte.
                  </p>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-xl font-semibold mb-3 pb-1 border-b border-border flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5 text-primary" /> Education
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">Northeastern University, Boston, USA</h3>
                        <span className="text-sm text-muted-foreground flex items-center whitespace-nowrap">
                          <Calendar className="h-4 w-4 mr-1" /> Expected Aug 2025
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Master of Science in Computer Engineering</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">University of Mumbai, Mumbai, India</h3>
                        <span className="text-sm text-muted-foreground flex items-center whitespace-nowrap">
                          <Calendar className="h-4 w-4 mr-1" /> Aug 2017 – Jul 2021
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Bachelor of Engineering in Information Technology</p>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-xl font-semibold mb-3 pb-1 border-b border-border flex items-center">
                    <Briefcase className="mr-2 h-5 w-5 text-primary" /> Professional Experience
                  </h2>
                  <div className="space-y-6">
                    {/* Experience 1 */}
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">Teaching Assistant – Machine Learning Operations</h3>
                        <span className="text-sm text-muted-foreground flex items-center whitespace-nowrap">
                          <Calendar className="h-4 w-4 mr-1" /> Dec 2024 – Present
                        </span>
                      </div>
                      <p className="text-sm text-primary font-medium mb-2">Northeastern University, Boston, USA</p>
                      <ul className="list-disc pl-5 space-y-1 text-foreground/80 text-sm">
                        <li>
                          Working on a RAG based chatbot leveraging LangChain, LLMs, vector databases, airflow and model
                          pipelines.
                        </li>
                        <li>
                          Assisting 200+ students in understanding MLOps concepts, model versioning/deployment and
                          operationalization.
                        </li>
                      </ul>
                    </div>

                    {/* Experience 2 */}
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">Data Science Engineer Co-Op</h3>
                        <span className="text-sm text-muted-foreground flex items-center whitespace-nowrap">
                          <Calendar className="h-4 w-4 mr-1" /> Aug 2024 – Dec 2024
                        </span>
                      </div>
                      <p className="text-sm text-primary font-medium mb-2">
                        Natixis Investment Managers (GROUPE BPCE), Boston, USA
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-foreground/80 text-sm">
                        <li>
                          Developed and productionalized 5+ end-to-end distributed data pipelines from sales, marketing,
                          and product datasets stored in PostgreSQL, enabling leadership to make data-driven decisions
                          through Tableau dashboards.
                        </li>
                        <li>
                          Optimized the performance of existing pipelines, by migrating them to DBT enhancing processing
                          speed by 30%.
                        </li>
                        <li>
                          Executed statistical techniques to scale a dataset containing millions of records to identify
                          data trends & patterns.
                        </li>
                        <li>
                          Built Python wrappers and scripts to automate management of multiple project dependencies &
                          Git repositories.
                        </li>
                      </ul>
                    </div>

                    {/* Experience 3 */}
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">Data Analyst</h3>
                        <span className="text-sm text-muted-foreground flex items-center whitespace-nowrap">
                          <Calendar className="h-4 w-4 mr-1" /> Sep 2021 – Jun 2023
                        </span>
                      </div>
                      <p className="text-sm text-primary font-medium mb-2">Deloitte, Mumbai, India</p>
                      <ul className="list-disc pl-5 space-y-1 text-foreground/80 text-sm">
                        <li>
                          Developed pipeline, extracting user and project data from 300+ Dataiku projects across diverse
                          Dataiku servers.
                        </li>
                        <li>
                          Improved data-driven decisions by 30% by analyzing user data using time-series model and
                          PowerBI reports.
                        </li>
                        <li>
                          Modeled clinical trial healthcare datasets, generating critical insights that directly shaped
                          client decision-making.
                        </li>
                        <li>Led a team to restructure cluster storage, improving system efficiency by 40%.</li>
                        <li>
                          Awarded SPOT Award for productionalizing 10+ Dataiku pipelines, ensuring accuracy and minimal
                          downtime.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h2 className="text-xl font-semibold mb-3 pb-1 border-b border-border flex items-center">
                    <Code className="mr-2 h-5 w-5 text-primary" /> Technical Projects
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">NewsNest: Web Data Extraction and Management</h3>
                        <a
                          href="https://github.com/BigDataIA-Spring2024-Sec2-Team2/Final-Project"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          GitHub
                        </a>
                      </div>
                      <p className="text-sm text-foreground/80">
                        Built & deployed real-time pipeline on GCP. Using BeautifulSoup and Selenium, scraped the latest
                        news, videos. Architected this data flow by leveraging Airflow, vector databases, Kafka, OpenAI,
                        docker and data warehouses.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">Data Engineering with Snowpark Python</h3>
                        <a
                          href="https://github.com/narayanipatil99/Data-engineering-with-snowpark-python"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          GitHub
                        </a>
                      </div>
                      <p className="text-sm text-foreground/80">
                        Implemented data engineering solutions using Snowpark Python for efficient data processing and
                        analytics. Leveraged Snowflake's capabilities for scalable data operations and transformations.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">Intelligent Knowledge Retrieval & Q/A</h3>
                        <a
                          href="https://github.com/BigDataIA-Spring2024-Sec2-Team2/Assignment-5"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          GitHub
                        </a>
                      </div>
                      <p className="text-sm text-foreground/80">
                        Developed an intelligent application for knowledge retrieval and question answering tasks.
                        Implemented advanced NLP techniques to enable efficient information extraction and accurate
                        responses.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Publications */}
                <div>
                  <h2 className="text-xl font-semibold mb-3 pb-1 border-b border-border flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-primary" /> Publications
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">Real Time Crowd Surveillance using Machine Learning</h3>
                        <span className="text-sm text-muted-foreground">Oct 2019</span>
                      </div>
                      <p className="text-sm text-muted-foreground">2nd GCAT IEEE Conference</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">AI Powered Farming and Crop Recommendation System</h3>
                        <span className="text-sm text-muted-foreground">May 2021</span>
                      </div>
                      <p className="text-sm text-muted-foreground">2nd INCET IEEE Conference</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">X-ray Image Analysis to Detect Pulmonary Disease with Deep CNN</h3>
                        <span className="text-sm text-muted-foreground">Aug 2020</span>
                      </div>
                      <p className="text-sm text-muted-foreground">IJPE Scopus Journal</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">
                          Performance Analysis of Activation Function on a Shallow Neural Network
                        </h3>
                        <span className="text-sm text-muted-foreground">Jun 2020</span>
                      </div>
                      <p className="text-sm text-muted-foreground">JETIR Journal</p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-xl font-semibold mb-3 pb-1 border-b border-border flex items-center">
                    <Database className="mr-2 h-5 w-5 text-primary" /> Technical Skills
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-medium mb-1">Programming Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "Java", "SQL", "R", "C", "Scala", "Golang", "C++"].map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-1">Databases</h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "MongoDB",
                          "Redis",
                          "MySQL",
                          "Redshift",
                          "Snowflake",
                          "NoSQL",
                          "Databricks",
                          "PostgreSQL",
                        ].map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-1">Data Engineering & Analytics</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Big Data", "ETL", "Airflow", "Power BI", "Tableau", "Hadoop", "RAGs", "Statistics"].map(
                          (skill) => (
                            <Badge
                              key={skill}
                              className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30"
                            >
                              {skill}
                            </Badge>
                          ),
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-1">Libraries & Frameworks</h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "NumPy",
                          "Pandas",
                          "TensorFlow",
                          "PyTorch",
                          "Scikit Learn",
                          "Computer Vision",
                          "NLP",
                          "ML",
                        ].map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-1">Cloud & DevOps</h3>
                      <div className="flex flex-wrap gap-2">
                        {["AWS", "Azure", "GCP", "Agile", "Spark", "Git", "FastAPI", "Flask"].map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
