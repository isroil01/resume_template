import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  document: {
    flexDirection: "column",
    justifyContent: "center", // Center vertically
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  page: {
    width: 900,
    display: "flex",
    flexDirection: "row",
    margin: "0 auto",
  },
  sidebar: {
    width: "30%",
    backgroundColor: "#22314E",
    padding: 20,
    color: "white",
  },
  mainContent: {
    width: "70%",
    padding: 20,
  },

  profileImage: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  title: {
    fontSize: 12,
    textAlign: "center",
    color: "#A5B5CE",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 10,
    marginBottom: 10,
  },
  contactSection: {
    marginTop: 20,
  },
  contactText: {
    fontSize: 10,
    color: "white",
    marginBottom: 5,
  },
  mainSectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#22314E",
    marginBottom: 10,
  },
  mainText: {
    fontSize: 10,
    color: "#555",
    lineHeight: 1.5,
  },
  experienceItem: {
    marginBottom: 15,
  },
  experienceTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#22314E",
    marginBottom: 5,
  },
  experienceText: {
    fontSize: 10,
    color: "#555",
    lineHeight: 1.4,
  },
});

function Modern() {
  const img =
    "https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg";
  return (
    <Document style={styles.document}>
      <Page size="A4" style={styles.page}>
        <View style={styles.sidebar}>
          <Image src={`${img}`} style={styles.profileImage} />
          <Text style={styles.name}>RICHARD SANCHEZ</Text>
          <Text style={styles.title}>MARKETING MANAGER</Text>

          {/* Contact Info */}
          <View style={styles.contactSection}>
            <Text style={styles.sectionTitle}>CONTACT</Text>
            <Text style={styles.contactText}>+123-456-7890</Text>
            <Text style={styles.contactText}>hello@reallygreatsite.com</Text>
            <Text style={styles.contactText}>123 Anywhere St, Any City</Text>
            <Text style={styles.contactText}>www.reallygreatsite.com</Text>
          </View>

          {/* Education */}
          <View>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            <Text style={styles.text}>2029 - 2030</Text>
            <Text style={styles.text}>Wardiere University</Text>
            <Text style={styles.text}>Master of Business Management</Text>
            <Text style={styles.text}>GPA: 3.8 / 4.0</Text>
          </View>

          {/* Skills */}
          <View>
            <Text style={styles.sectionTitle}>SKILLS</Text>
            <Text style={styles.text}>• Project Management</Text>
            <Text style={styles.text}>• Public Relations</Text>
            <Text style={styles.text}>• Teamwork</Text>
            <Text style={styles.text}>• Time Management</Text>
          </View>

          {/* Languages */}
          <View>
            <Text style={styles.sectionTitle}>LANGUAGES</Text>
            <Text style={styles.text}>• English (Fluent)</Text>
            <Text style={styles.text}>• French (Fluent)</Text>
            <Text style={styles.text}>• Spanish (Intermediate)</Text>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Profile Section */}
          <View>
            <Text style={styles.mainSectionTitle}>PROFILE</Text>
            <Text style={styles.mainText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>

          {/* Work Experience */}
          <View>
            <Text style={styles.mainSectionTitle}>WORK EXPERIENCE</Text>

            <View style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>
                Borcelle Studio (2030 - PRESENT)
              </Text>
              <Text style={styles.experienceText}>
                • Lead, mentor, and manage a high-performing team.
              </Text>
              <Text style={styles.experienceText}>
                • Develop and execute marketing campaigns.
              </Text>
              <Text style={styles.experienceText}>
                • Monitor brand consistency.
              </Text>
            </View>

            <View style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>
                Fauget Studio (2025 - 2029)
              </Text>
              <Text style={styles.experienceText}>
                • Create and manage the marketing budget.
              </Text>
              <Text style={styles.experienceText}>
                • Monitor emerging trends.
              </Text>
            </View>

            <View style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>
                Studio Shodwe (2024 - 2025)
              </Text>
              <Text style={styles.experienceText}>
                • Develop strong relationships with partners.
              </Text>
            </View>
          </View>

          {/* References */}
          <View>
            <Text style={styles.mainSectionTitle}>REFERENCES</Text>
            <Text style={styles.mainText}>
              Estelle Darcy, CTO at Wardiere Inc. - +123-456-7890
            </Text>
            <Text style={styles.mainText}>
              Harper Richard, CEO at Wardiere Inc. - +123-456-7890
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Modern;
