//
// CompleteQuest200ResponseDataTask.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct CompleteQuest200ResponseDataTask: Codable, JSONEncodable, Hashable {

    public var id: String?
    public var title: String?
    public var questTitle: String?
    public var xpEarned: Double?

    public init(id: String? = nil, title: String? = nil, questTitle: String? = nil, xpEarned: Double? = nil) {
        self.id = id
        self.title = title
        self.questTitle = questTitle
        self.xpEarned = xpEarned
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case title
        case questTitle
        case xpEarned
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(id, forKey: .id)
        try container.encodeIfPresent(title, forKey: .title)
        try container.encodeIfPresent(questTitle, forKey: .questTitle)
        try container.encodeIfPresent(xpEarned, forKey: .xpEarned)
    }
}


@available(iOS 13, tvOS 13, watchOS 6, macOS 10.15, *)
extension CompleteQuest200ResponseDataTask: Identifiable {}
